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
  // Extract ID from query parameters
  const { id } = req.query;

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
      return getProject(req, res, id);
    case 'PUT':
      return updateProject(req, res, id);
    case 'DELETE':
      return deleteProject(req, res, id);
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}

const getProject = async (req, res, id) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID format'
      });
    }

    const project = await Project.findById(id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    return res.status(200).json({
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

const updateProject = async (req, res, id) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID format'
      });
    }

    const project = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    return res.status(200).json({
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

const deleteProject = async (req, res, id) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID format'
      });
    }

    const project = await Project.findByIdAndDelete(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};