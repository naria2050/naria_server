const { registerUserService, loginUserService, loginAdminService } = require('./authServices');

const registerUser = async (req, res) => {
  try {
    const user = await registerUserService(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const token = await loginUserService(req.body.email, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const token = await loginAdminService(req.body.email, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, loginAdmin };
