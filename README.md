# 📚 AI Learning Assistant

An AI-powered learning assistant built with **Node.js**, **Express**, and **Google Gemini API**.

## Features
- 📝 **Summarize** your notes instantly
- ❓ **Generate Quiz** questions from your content
- 💬 **Ask Questions** about your study material

## Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/Ai-Learning-Assistant.git
cd Ai-Learning-Assistant
```

### 2. Install dependencies
```bash
cd server
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```
Then edit `.env` and add your [Google AI Studio API key](https://aistudio.google.com):
```
GEMINI_API_KEY=your_key_here
```

### 4. Start the server
```bash
node server.js
```

### 5. Open in browser
Visit 👉 **http://localhost:5000**

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **AI:** Google Gemini API (`@google/genai`)
