const express = require('express');
const router = express.Router();
const { registerUser, loginUser, loginAdmin } = require('./authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/adminlogin', loginAdmin);

module.exports = router;
