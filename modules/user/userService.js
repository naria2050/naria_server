const User = require('./userModel');

// Fetch all users (for Admins)
const getAllUsersService = async () => {
  return await User.find();
};

// Fetch user by ID
const getUserByIdService = async (userId) => {
  return await User.findById(userId);
};

module.exports = { getAllUsersService, getUserByIdService };
