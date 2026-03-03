import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function generateItinerary(params: {
  destination: string;
  budget: string;
  type: string;
  duration: string;
}) {
  const prompt = `Generate a detailed travel itinerary for a ${params.duration} trip to ${params.destination}. 
  The traveler has a ${params.budget} budget and prefers a ${params.type} travel style.
  Include day-by-day activities, estimated costs, and local tips.
  Format the response as a structured JSON object with a "title", "summary", and "days" (array of {day: number, activities: string[]}).`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Error generating itinerary:", error);
    return null;
  }
}
