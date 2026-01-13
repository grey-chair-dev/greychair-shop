
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

let ai: GoogleGenAI | null = null;

function getClient(): GoogleGenAI {
  if (ai) return ai;
  const apiKey = getGeminiApiKey();
  if (!apiKey) {
    // Important: do NOT throw at module import time. This should only fail when the user
    // actually tries to call the Tea Finder, so the UI can handle it gracefully.
    throw new Error(
      "Missing Gemini API key. Set VITE_GEMINI_API_KEY in greychair-shop/.env.local and restart the dev server."
    );
  }
  ai = new GoogleGenAI({ apiKey });
  return ai;
}

export const getTeaRecommendation = async (userPrompt: string): Promise<TeaRecommendation> => {
  const client = getClient();
  const response = await client.models.generateContent({
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
