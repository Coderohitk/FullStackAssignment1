# Full Stack Assignment 1 - Portfolio Project

## Description

This project is a portfolio web application built using Express.js and MongoDB, showcasing your skills and projects. It provides API endpoints for fetching data related to your projects and skills.

## Features

- **Project Management**: View, add, update, and delete projects.
- **Skill Management**: View, add, update, and delete skills.
- **API Endpoints**: Get JSON data for projects and skills.

## API Endpoints

### 1. Projects API Endpoint
- **GET** `/api/projects`
  - Returns a JSON array of all projects in the database.


### 2. Skills API Endpoint
- **GET** `/api/skills`
  - Returns a JSON array of all skills in the database.
  
## Deployment

### Deploying to Render.com

1. **Push the code to GitHub**.
2. **Deploy the app to Render**:
   - Go to [Render.com](https://render.com).
   - Create a new Web Service and link your GitHub repository.
   - Choose **Node.js** as the environment and configure the build and start commands.

   **Start Command**: `node index.js`
   
   **Build Command**: `npm install`

3. After the app is deployed, you can access it using the URL provided by Render. Example:
   - **App URL**: [https://fullstackassignment1-ew61.onrender.com](https://fullstackassignment1-ew61.onrender.com)

## Usage

1. **Viewing Projects & Skills**:
   - Navigate to the homepage to view a list of projects and skills.
   - You can add, update, or delete projects and skills.

2. **Interacting with the API**:
   - You can access the projects API at `https://fullstackassignment1-ew61.onrender.com/project/api`.
   - You can access the skills API at `https://fullstackassignment1-ew61.onrender.com/skill/api`.

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FullStackAssignment1.git
   cd FullStackAssignment1
