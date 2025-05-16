// backend/controllers/ragController.js
const axios = require('axios');
const Query = require('../models/Query');

// Controller for handling RAG queries
exports.askQuestion = async (req, res) => {
  try {
    const { question } = req.body;
    
    // Call Python RAG API
    const response = await axios.post('http://localhost:5001/ask', { question });
    const { answer, sources } = response.data;
    
    // Save query and response to MongoDB
    const newQuery = new Query({
      question,
      answer,
      sources: sources || []
    });
    
    await newQuery.save();
    
    res.json({ answer, sources });
  } catch (error) {
    console.error('Error processing query:', error);
    res.status(500).json({ error: 'Failed to process query' });
  }
};

// Controller for retrieving query history
exports.getQueryHistory = async (req, res) => {
  try {
    const history = await Query.find().sort({ timestamp: -1 }).limit(20);
    res.json(history);
  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ error: 'Failed to fetch query history' });
  }
};
