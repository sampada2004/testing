// backend/models/Query.js
const mongoose = require('mongoose');

const QuerySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  sources: [String]
});

module.exports = mongoose.model('Query', QuerySchema);
