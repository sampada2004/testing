// backend/routes/api.js
const express = require('express');
const router = express.Router();
const ragController = require('../controllers/ragController');

// Route to ask a question
router.post('/ask', ragController.askQuestion);

// Route to get query history
router.get('/history', ragController.getQueryHistory);

module.exports = router;
