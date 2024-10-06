const express = require('express');
const bodyParser = require('body-parser');
const moongoose = require("mongoose");
const jobRoutes = require('./routes/job');

const app = express();

app.use(bodyParser.json());

moongoose.connect('mongodb+srv://bhaveshnegi:kedarnath@cluster0.flnm3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Job Recommendation Service is running!');
});

app.use('/api/jobs', jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});