const express = require('express');
const router = express.Router();
const Job = require('../model/Job');

// Add a new job
router.post('/add', async (req, res) => {
  try {
    const { job_title, company, required_skills, location, job_type, experience_level } = req.body;

    // Ensure all fields are provided
    if (!job_title || !company || !required_skills || !location || !job_type || !experience_level) {
      return res.status(400).json({ message: 'All fields must be provided' });
    }

    const newJob = new Job({
      job_title,
      company,
      required_skills,
      location,
      job_type,
      experience_level
    });

    await newJob.save();
    res.json({ message: 'Job added successfully', job: newJob });
  } catch (error) {
    res.status(500).json({ message: 'Error adding job', error: error.message });
  }
});

// Get all jobs (for testing purposes)
router.get('/all', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
