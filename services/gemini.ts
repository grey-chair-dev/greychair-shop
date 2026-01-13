
import { GoogleGenAI, Type } from "@google/genai";
import { TeaRecommendation } from "../types";

function getGeminiApiKey(): string | undefined {
  // Preferred Vite style: expose a build-time key to the client (note: this is not secret in the browser).
  const viteKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  if (viteKey) return viteKey;

  // Back-compat for earlier config that injected GEMINI_API_KEY into process.env.API_KEY via Vite `define`.
  const legacyKey = (globalThis as any)?.process?.env?.API_KEY as string | undefined;
  return legacyKey;
}

const apiKey = getGeminiApiKey();
if (!apiKey) {
  throw new Error(
    "Missing Gemini API key. Set VITE_GEMINI_API_KEY in greychair-shop/.env.local (or configure the legacy process.env.API_KEY injection)."
  );
}

const ai = new GoogleGenAI({ apiKey });

export const getTeaRecommendation = async (userPrompt: string): Promise<TeaRecommendation> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Recommend a specific tea for this request: "${userPrompt}". 
    The shop is 'Grey Chair Tea' in Batavia, Ohio. Keep the description direct and helpful.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          type: { type: Type.STRING },
          description: { type: Type.STRING },
          steepingInstructions: { type: Type.STRING },
          pairing: { type: Type.STRING }
        },
        required: ["name", "type", "description", "steepingInstructions", "pairing"]
      }
    }
  });

  return JSON.parse(response.text.trim());
};
