Text Classification API (Gemini – Free Tier)

A lightweight Node.js REST API that classifies text into predefined categories using Google Gemini (Free Tier).
The API is stateless, database-free, and designed for controlled, predictable AI output.

Categories

Complaint

Query

Feedback

Others

Technology Stack

Node.js

Express.js

Google Gemini API (Free Tier)

@google/generative-ai

dotenv

Environment Setup
Prerequisites

Node.js v18+

Google Gemini API Key

Installation
npm install

Environment Variables

Create a .env file:

PORT=3000
GEMINI_API_KEY=your_gemini_api_key


API keys are generated via Google AI Studio:

https://aistudio.google.com

Running the Application
npm start


The server starts on:

http://localhost:3000

API Reference
Classify Text

Endpoint

POST /api/classify


Request Body

{
  "text": "Customer support has not responded to my issue"
}


Response

{
  "success": true,
  "input": "Customer support has not responded to my issue",
  "category": "Complaint"
}

AI Integration Overview

The API uses Google Gemini (Free Tier) as a controlled classification engine.

A strict prompt limits output to predefined categories only

Responses are validated before being returned

Invalid or unexpected outputs default to Others

Quota or model errors are handled gracefully

Free-tier compatible model:

gemini-1.5-flash

Error Handling

Missing input → 400 Bad Request

Gemini quota exceeded → graceful fallback (Others)

Invalid model response → Others

Notes on Free Tier Usage

Model availability depends on account and region

Some models have zero free quota

Rate limiting is recommended for production use

Model availability can be verified via:

curl "https://generativelanguage.googleapis.com/v1/models?key=YOUR_API_KEY"

License

MIT License