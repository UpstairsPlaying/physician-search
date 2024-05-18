const axios = require('axios');

module.exports = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    const apiKey = process.env.API_KEY; // Use environment variable
    const response = await axios.get(`https://api.example.com/physicians?name=${name}&apiKey=${apiKey}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching physician data' });
  }
};
