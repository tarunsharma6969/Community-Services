# ScholarConnect — Student Scholarship & Career Guidance Portal

A starter full-stack college project built with React + Vite, Express, and MongoDB.

## Features
- Responsive home page and navigation
- Register and login forms
- Scholarship directory with search and filters
- Demo eligibility checker (clearly marked as illustrative)
- Student dashboard and profile
- Admin overview page
- Express API with MongoDB-backed registration/login and scholarship endpoints
- Graceful frontend demo mode when the backend/database is not running

## Requirements
- Node.js 20+ recommended
- MongoDB local installation or MongoDB Atlas connection string

## Setup
1. Extract this folder.
2. Open the `ScholarConnect` folder in VS Code.
3. In the terminal run:
   ```bash
   npm run install:all
   ```
4. Copy `server/.env.example` to `server/.env`.
5. Put your MongoDB connection string in `MONGO_URI` in `server/.env`.
6. Start both apps:
   ```bash
   npm run dev
   ```
7. Open `http://localhost:5173`.

The client runs on port 5173 and API on port 5000.

## Demo notes
- If the backend is offline, registration/login forms display a helpful message and the frontend pages still work.
- Never use this demo authentication as production authentication without adding secure session/JWT handling, validation, rate limits, and other security controls.
- Scholarship entries and eligibility rules in this starter are sample/demo data. Verify official eligibility, amounts, and deadlines from the official scholarship provider before relying on them.
- Admin page is a UI demo and has no authorization protection yet. Do not expose it as a real admin system.

## Main files
- `client/src/App.jsx`: routes
- `client/src/index.css`: global styling
- `client/src/pages/`: all page components
- `server/index.js`: Express API
- `server/models/`: MongoDB schemas
