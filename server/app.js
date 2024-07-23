const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Import routes
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

module.exports = app;
