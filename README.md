# MERN Portfolio

A modern portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- Responsive design
- Project showcase
- Skills visualization
- Contact form
- RESTful API
- Modern UI with smooth animations

## Project Structure

```
portfolio/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd ../frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (frontend) and `http://localhost:5000` (backend API).

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a single skill
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

## Technologies Used

### Frontend
- React with TypeScript
- React Router for navigation
- Axios for API requests
- CSS3 for styling

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Dotenv for environment variables
- Cors for cross-origin resource sharing
- Helmet for security headers
- Morgan for logging

## Deployment

### Backend
Deploy the backend to platforms like:
- Heroku
- Render
- AWS EC2
- DigitalOcean App Platform

### Frontend
Deploy the frontend to platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.