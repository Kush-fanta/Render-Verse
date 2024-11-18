import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import fetch from 'node-fetch';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // Image details
    const width = 1038;
    const height = 1845;
    const seed = Math.floor(Math.random() * 100000); // Generate a random seed for variation
    const model = 'flux'; // Using 'flux' as default

    const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

    const response = await fetch(imageUrl);

    const buffer = await response.buffer();
    res.set('Content-Type', 'image/jpeg');
    res.send(buffer);
    // const data = await response.json();
    // res.status(200).json({ data });
    // Assuming the response contains the image URL in a specific format
    // if (data && data.imageUrl) {
    //   res.status(200).json({ imageUrl: data.imageUrl });
    // } else {
    //   res.status(400).json({ message: 'Image generation failed' });
    // }
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message || 'Something went wrong');
  }
});

export default router;