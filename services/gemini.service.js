const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.classifyWithGemini = async (text) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const prompt = `
You are a text classification system.

Classify the following text into ONLY ONE of these categories:
- Complaint
- Query
- Feedback
- Others

Return ONLY the category name. No explanation.

Text:
"${text}"
`;

  const result = await model.generateContent(prompt);
  const response = result.response.text().trim();
  console.log("Gemini response --------------------->",response)

  // Safety: enforce valid category
  const allowed = ["Complaint", "Query", "Feedback", "Others"];
  return allowed.includes(response) ? response : "Others";
};
