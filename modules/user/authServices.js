const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./userModel');

const registerUserService = async (userData) => {
  const { email, password, ...rest } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const newUser = new User({ email, ...rest });
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, salt);

  await newUser.save();
  return newUser;
};

const loginUserService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const loginAdminService = async (email, password) => {
  const admin = await User.findOne({ email, role: 'Admin' });
  if (!admin) throw new Error('Admin not found');

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

module.exports = { registerUserService, loginUserService, loginAdminService };
