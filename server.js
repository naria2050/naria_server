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
const packageRoutes = require('./modules/package/packageRoutes');
// const bookingRoutes = require('./modules/booking/bookingRoutes');
// const userRoutes = require('./modules/user/userRoutes');

app.use('/api/packages', packageRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/users', userRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
