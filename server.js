const express = require('express');
const mongoose = require('mongoose');  // Fixed typo
const jobRoutes = require('./routes/job');
const userRoutes = require('./routes/user');

const app = express();

// Parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bhaveshnegi:kedarnath@cluster0.flnm3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Base route
app.get('/', (req, res) => {
    res.send('Job Recommendation Service is running!');
});

// Job and User routes
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
