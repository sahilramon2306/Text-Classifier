Text Classification API (Gemini – Free Tier)

A lightweight Node.js REST API that classifies text into predefined categories using Google Gemini (Free Tier).
The API is stateless, database-free, and designed for predictable, controlled AI output.

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

Node.js v18 or higher

Google Gemini API Key

Installation
npm install

Environment Variables

Create a .env file in the project root:

PORT=3000
GEMINI_API_KEY=your_gemini_api_key


API keys can be generated from:

https://aistudio.google.com

Running the Application
npm start


The server will start on:

http://localhost:3000

API Reference
Classify Text

Endpoint

POST /api/classify


Request Body

{
  "text": "Customer support has not responded to my issue"
}


Successful Response

{
  "success": true,
  "input": "Customer support has not responded to my issue",
  "category": "Complaint"
}

AI Integration Overview

This API integrates Google Gemini as a controlled text classification engine.

A strict prompt restricts output to predefined categories only

Gemini responses are validated before returning to the client

Invalid or unexpected outputs default to Others

Quota or model errors are handled gracefully

Free-tier compatible model

gemini-1.5-flash

Error Handling

Missing input → 400 Bad Request

Gemini quota exceeded → graceful fallback (Others)

Invalid model response → fallback to Others

Free Tier Notes

Model availability varies by region and account

Some models have zero free-tier quota

Rate limiting is recommended for production usage

Available models can be verified using:

curl "https://generativelanguage.googleapis.com/v1/models?key=YOUR_API_KEY"

License

MIT License
