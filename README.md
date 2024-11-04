# Ashish's Mini AI Assistant

A simple, elegant AI chat assistant powered by Google's Gemini AI. This application provides a clean interface for interacting with the Gemini AI model, complete with a modern UI and message copying functionality.

## Features

- 🤖 Real-time AI responses using Gemini Pro
- 📋 Copy-to-clipboard functionality for AI responses
- 💬 Clean and responsive chat interface
- ⚡ Fast and lightweight
- 🎨 Modern UI design

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- AI: Google Gemini AI API

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or higher)
- npm (Node Package Manager)
- Google Gemini AI API key

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ismartash/mini_ai_assistant.git
cd mini_ai_assistant
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

4. Start the development server:
```bash
npm start
```

## Project Structure

```
├── public/
│   └── index.html
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=3000
```

## Deployment on Render

1. Create an account on [Render](https://render.com)
2. Click on "New +" button and select "Web Service"
3. Connect your GitHub repository
4. Fill in the following details:
   - Name: your-app-name
   - Runtime: Node
   - Build Command: `npm install`
   - Start Command: `node server.js`
5. Add the environment variable:
   - Key: `GEMINI_API_KEY`
   - Value: Your Gemini AI API key
6. Click "Create Web Service"

The application will be automatically deployed when you push changes to your GitHub repository.


## License
[MIT](https://choosealicense.com/licenses/mit/)

