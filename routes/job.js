const express = require('express');
const router = express.Router();
const Job = require('../model/Job');

// Add a new job
router.post('/add', async (req, res) => {
  const newJob = new Job(req.body);
  await newJob.save();
  res.json({ message: 'Job added successfully', job: newJob });
});

// Get all jobs (for testing purposes)
router.get('/all', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

module.exports = router;
