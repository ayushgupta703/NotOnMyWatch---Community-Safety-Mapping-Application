require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Incident model
const incidentSchema = new mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  coordinates: {
    lat: Number,
    lng: Number,
  },
  createdAt: { type: Date, default: Date.now },
});
const Incident = mongoose.model('Incident', incidentSchema);

// Routes
app.get('/', (req, res) => {
  res.send('NotOnMyWatch backend is running.');
});

// Log a new incident
app.post('/api/incidents', async (req, res) => {
  try {
    const { category, description, location, coordinates } = req.body;
    if (!category || !description || !location) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }
    const incident = new Incident({ category, description, location, coordinates });
    await incident.save();
    res.status(201).json({ message: 'Incident logged successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to log incident.' });
  }
});

// Get all incidents (optionally filter by category)
app.get('/api/incidents', async (req, res) => {
  try {
    const { category } = req.query;
    let filter = {};
    if (category && category !== 'all') {
      filter.category = category;
    }
    const incidents = await Incident.find(filter).sort({ createdAt: -1 });
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch incidents.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 