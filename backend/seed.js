const mongoose = require('mongoose');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Sample data
const sampleProjects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with MERN stack.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects.',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/taskmanager',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather forecasting application with real-time data.',
    technologies: ['React', 'API Integration', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/weather',
    featured: false
  },
  {
    title: 'Cricket Ticket Booker',
    description: 'A comprehensive cricket ticket booking application with real-time availability, secure payment processing, and user-friendly interface for booking cricket match tickets.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://cricket-ticket-booker-client-lgwl71y1i-owais-projects-19710b90.vercel.app/',
    githubUrl: 'https://github.com/owaais008-hub/cricket-ticket-booker.git',
    featured: true
  }
];

const sampleSkills = [
  {
    name: 'React',
    level: 90,
    category: 'Frontend'
  },
  {
    name: 'JavaScript',
    level: 85,
    category: 'Frontend'
  },
  {
    name: 'HTML/CSS',
    level: 95,
    category: 'Frontend'
  },
  {
    name: 'Node.js',
    level: 80,
    category: 'Backend'
  },
  {
    name: 'Express',
    level: 75,
    category: 'Backend'
  },
  {
    name: 'MongoDB',
    level: 70,
    category: 'Database'
  }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    
    // Insert sample data
    await Project.insertMany(sampleProjects);
    await Skill.insertMany(sampleSkills);
    
    console.log('Sample data inserted successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });