# job-recommendation-service

## 1. Project Setup

- First, set up a basic Node.js project:

- Create a new directory for the project.

- Run the following commands to initialize a Node.js project:

- - npm init -y

- Install the necessary dependencies:

- npm install express mongoose 

## 2. Set Up Express Server

- Create a simple Express server to handle API requests:

- - server.js

## 3. Database Models

Define User and Job models using Mongoose.

models/User.js

models/Job.js

## 4. RESTful API Endpoints

Add a user profile to the database.

Add job postings to the database.

Get recommended jobs based on user profile.

Create Routes

routes/jobs.js

routes/users.js

## 5. Integrate Routes into the Server

In server.js, import the routes and use them

## 6. Test with Sample Data

For testing purposes, you can use Postman or curl to add job postings and user profiles, and then request job recommendations.

Add Job (POST to /api/jobs/add)

Add User (POST to /api/users/add)

Get Job Recommendations (POST to /api/users/recommend)

## 7. Error Handling and Testing

Make sure to add error handling for bad requests, database issues, etc.

## Setup Instructions

## Prerequisites

- \[Node.js\](https://nodejs.org/) (v12.x or higher)

- \[MongoDB\](https://www.mongodb.com/) (either locally or a cloud service like MongoDB Atlas)

## 1. Clone the Repository



git clone https://github.com/bhaveshnegi/job-recommendation-service.git

cd job-recommendation-service

## 2. Install Dependencies

npm install

## 3. Set Up MongoDB

If using MongoDB Atlas, create a cluster and obtain the connection string.

Replace the MongoDB connection string in server.js with your own:

mongoose.connect('your\_mongodb\_connection\_string', { useNewUrlParser: true, useUnifiedTopology: true });

## 4. Start the Server

npm start

The server will run on http://localhost:3000.

API Endpoints

User Endpoints

Add User Profile

Endpoint: POST /api/users/add

Request Body:

{

"name": "Alice Johnson",

"skills": \["JavaScript", "React", "Node.js"\],

"experience\_level": "Intermediate",

"preferences": {

"desired\_roles": \["Frontend Developer"\],

"locations": \["Remote", "Austin"\],

"job\_type": "Full-Time"

}

}

Get Job Recommendations

Endpoint: POST /api/users/recommend

Request Body:

{

"skills": \["JavaScript", "React"\],

"experience\_level": "Intermediate",

"preferences": {

"locations": \["Remote", "Austin"\],

"job\_type": "Full-Time"

}

}

Job Endpoints

Add Job Posting

Endpoint: POST /api/jobs/add

Request Body:

{

"job\_title": "Frontend Developer",

"company": "Tech Innovations",

"required\_skills": \["JavaScript", "React"\],

"location": "Remote",

"job\_type": "Full-Time",

"experience\_level": "Intermediate"

}

Get All Jobs

Endpoint: GET /api/jobs/all