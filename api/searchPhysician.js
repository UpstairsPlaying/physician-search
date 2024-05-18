const axios = require('axios');

module.exports = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    // Replace 'api.example.com' with your actual physician data API
    const response = await axios.get(`https://api.example.com/physicians?name=${encodeURIComponent(name)}`);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching physician data' });
  }
};
