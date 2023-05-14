// Import required modules
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const userController = require('../controller/userController')

// Register a new user
router.post('/', userController.createUser);

// Get all users
router.get('/', userController.getUser);

module.exports = router;
