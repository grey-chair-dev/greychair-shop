
import { GoogleGenAI, Type } from "@google/genai";
import { TeaRecommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
