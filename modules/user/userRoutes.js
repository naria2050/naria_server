const express = require('express');
const router = express.Router();
const { getUsers, getUser } = require('./userController');
const protect = require('../../middlewares/authMiddleware');

// Admin-only route to get all users
router.get('/', protect('Admin'), getUsers);

// Admin-only route to get user details by ID
router.get('/:id', protect('Admin'), getUser);

module.exports = router;
