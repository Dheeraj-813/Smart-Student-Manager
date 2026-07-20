const express = require('express');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Student routes
app.use('/api/students', studentRoutes);

// Authentication routes..
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('Smart Student Manager API is running...');
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

module.exports = app;