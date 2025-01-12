#  Mini AI Assistant

A simple, elegant AI chat assistant powered by Google's Gemini AI. This application provides a clean interface for interacting with the Gemini AI model, complete with a modern UI, message copying functionality, and chat history management. Users can view, delete, and interact with their chat history.

## Features

- 🤖 **Real-time AI responses** using Gemini Pro.
- 📋 **Copy-to-clipboard** functionality for AI responses.
- 💬 **Clean and responsive chat interface** for seamless communication.
- ⚡ **Fast and lightweight** with modern design principles.
- 🎨 **Modern UI design** built with user experience in mind.
- 📜 **Chat History**: View and delete past chats.
  - Users can see their entire chat history.
  - Each chat can be deleted if no longer needed.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **AI**: Google Gemini AI API
- **Database**: MongoDB Atlas (to store chat history)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** (v14.0.0 or higher)
- **npm** (Node Package Manager)
- **Google Gemini AI API key**
- **MongoDB Atlas account** (for storing chat history)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/ismartash/mini_ai_assistant.git
    cd mini_ai_assistant
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory** with the following content:
    ```env
    GEMINI_API_KEY=your_gemini_api_key_here
    MONGODB_URI=your_mongodb_atlas_connection_string_here
    PORT=3000
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.



