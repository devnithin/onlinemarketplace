require('dotenv').config(); // Make sure to load the .env file

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.jsx'); // Import your routes
const productRoutes = require('./routes/productRoutes.jsx')
const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));

// Use Auth Routes
app.use('/api/auth', authRoutes);
app.use('/api/products',productRoutes)

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
