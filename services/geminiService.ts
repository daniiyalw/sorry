
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getApologyIdeas(name: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I need a list of the 3 most unique and trending romantic apology ideas for my girlfriend named ${name} in 2025. 
        Focus on sincere gestures, modern gift ideas, and the meaning of her name if relevant. 
        Format as a list with titles and descriptions.`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const text = response.text || "I couldn't find specific ideas, but a handwritten letter and her favorite flowers always work.";
      const sources: { title: string; uri: string }[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks
        ?.filter(chunk => chunk.web)
        .map(chunk => ({
          title: chunk.web?.title || 'Source',
          uri: chunk.web?.uri || '',
        })) || [];

      return { text, sources };
    } catch (error) {
      console.error("Error fetching apology ideas:", error);
      return { 
        text: "I'm having trouble connecting to my romantic database, but I know Afia deserves the best. Maybe try a personalized video message or a surprise delivery of her favorite treats?", 
        sources: [] 
      };
    }
  }
}

export const geminiService = new GeminiService();
