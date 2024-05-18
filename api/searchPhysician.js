const axios = require('axios');

module.exports = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    const apiUrl = `https://api.example.com/physicians?name=${encodeURIComponent(name)}`;
    console.log(`Requesting URL: ${apiUrl}`);
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching physician data' });
  }
};
