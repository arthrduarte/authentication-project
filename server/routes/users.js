const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err); 
    res.status(500).send({ error: 'An error occurred while fetching users' });
  }
});

module.exports = router;
