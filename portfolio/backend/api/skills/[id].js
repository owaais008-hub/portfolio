import mongoose from 'mongoose';
import Skill from '../../models/Skill';

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
      return getSkill(req, res, id);
    case 'PUT':
      return updateSkill(req, res, id);
    case 'DELETE':
      return deleteSkill(req, res, id);
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}

const getSkill = async (req, res, id) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID format'
      });
    }

    const skill = await Skill.findById(id);
    
    if (!skill) {
      return res.status(404).json({
        success: false,
        error: 'Skill not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: skill
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

const updateSkill = async (req, res, id) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID format'
      });
    }

    const skill = await Skill.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!skill) {
      return res.status(404).json({
        success: false,
        error: 'Skill not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: skill
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

const deleteSkill = async (req, res, id) => {
  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid ID format'
      });
    }

    const skill = await Skill.findByIdAndDelete(id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        error: 'Skill not found'
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