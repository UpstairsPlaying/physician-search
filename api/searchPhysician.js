const axios = require('axios');

module.exports = async (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }

  try {
    // Mock API response for demonstration
    const mockResponse = {
      name: name,
      specialty: 'Cardiology',
      location: 'New York'
    };
    res.status(200).json(mockResponse);
  } catch (error) {
    console.error('API error:', error.message);
    res.status(500).json({ error: 'Error fetching physician data' });
  }
};
