const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/quiz', async (req, res) => {
  try {
    const response = await axios.get('https://api.jsonserve.com/Uw5CrX');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    res.status(500).json({ error: 'Failed to fetch quiz data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});