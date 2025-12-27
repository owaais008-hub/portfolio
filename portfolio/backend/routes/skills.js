const express = require('express');
const { 
  getSkills,
  getSkill,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillController');

// Create router
const router = express.Router();

// Define routes
router.route('/')
  .get(getSkills)
  .post(createSkill);

router.route('/:id')
  .get(getSkill)
  .put(updateSkill)
  .delete(deleteSkill);

module.exports = router;