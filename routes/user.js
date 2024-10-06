const express = require('express');
const router = express.Router();
const User = require('../model/User');
const Job = require('../model/Job');

// Add a new user profile
router.post('/add', async (req, res) => {
    try {
      const { name, skills, experience_level, preferences } = req.body;
      
      // Ensure that all necessary fields are provided
      if (!name || !skills || !experience_level || !preferences) {
        return res.status(400).json({ message: 'All fields must be provided' });
      }
  
      const newUser = new User({
        name,
        skills,
        experience_level,
        preferences
      });
  
      await newUser.save();
      res.json({ message: 'User profile added successfully', user: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Error adding user profile', error: error.message });
    }
  });
  

// Get job recommendations
router.post('/recommend', async (req, res) => {
  try {
    const { skills, experience_level, preferences } = req.body;

    if (!skills || !experience_level || !preferences) {
      return res.status(400).json({ message: 'Please provide skills, experience level, and preferences' });
    }

    // Set default values if preferences.locations or job_type are missing
    const locations = preferences?.locations || [];
    const job_type = preferences?.job_type || 'Full-Time';

    // Find jobs that match the user's skills, experience level, and preferences
    const jobs = await Job.find({
      required_skills: { $in: skills },
      experience_level,
      location: { $in: locations },
      job_type: job_type
    });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job recommendations', error: error.message });
  }
});

module.exports = router;
