const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(require('cors')());
app.use(require('body-parser').json());

// Database connection
connectDB();

// Routes
const packageRoutes = require('./modules/hajjpackage/packageRoutes');
const TourbookingRoutes = require('./modules/Tourpackage/TourPackageRouter');
const userRoutes = require('./modules/user/userRoutes');
const AuthRoutes = require('./modules/user/authRouter');

app.use('/api/packages', packageRoutes);
app.use('/api/tours', TourbookingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', AuthRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
