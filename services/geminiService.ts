import { GoogleGenAI, Type } from "@google/genai";
import { RiskAnalysisResponse } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeInsiderRisk = async (context: string): Promise<RiskAnalysisResponse> => {
  try {
    const model = "gemini-2.5-flash";
    
    const prompt = `
      You are an expert cybersecurity consultant specializing in Insider Risk Management (IRM).
      Analyze the following organizational context and provide a risk assessment.
      
      Context: "${context}"
      
      Return the response in JSON format with a risk score (1-10), a brief summary, a list of key threats, and mitigation recommendations.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            riskScore: { type: Type.INTEGER, description: "Risk score from 1 to 10" },
            summary: { type: Type.STRING, description: "Executive summary of the risk profile" },
            keyThreats: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of potential insider threats identified"
            },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Strategic recommendations to mitigate risks"
            }
          },
          required: ["riskScore", "summary", "keyThreats", "recommendations"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as RiskAnalysisResponse;

  } catch (error) {
    console.error("Error analyzing risk:", error);
    // Fallback response in case of API error or invalid key
    return {
      riskScore: 0,
      summary: "Unable to perform AI analysis at this time. Please ensure your API key is valid.",
      keyThreats: ["System unavailable"],
      recommendations: ["Contact our manual support team."]
    };
  }
};
