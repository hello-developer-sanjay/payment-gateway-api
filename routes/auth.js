const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');

const router = express.Router();

// POST route for user login
router.post('/login', authController.login);

// Example route for user logout (if needed)
router.get('/logout', (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
});

module.exports = router;
