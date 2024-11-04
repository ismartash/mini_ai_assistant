import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
const port = process.env.PORT || 3090;
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
app.use(express.static('public'));
app.use(express.json());
app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const result = await model.generateContent(message);
        const response = result.response.text();
        res.json({ response });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});