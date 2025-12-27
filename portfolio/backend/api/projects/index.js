import mongoose from 'mongoose';
import Project from '../../models/Project';

// Initialize MongoDB connection
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return; // Already connected
  }
  
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
};

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Connect to database
  await connectDB();

  switch (req.method) {
    case 'GET':
      return getProjects(req, res);
    case 'POST':
      return createProject(req, res);
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    return res.status(201).json({
      success: true,
      data: project
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};