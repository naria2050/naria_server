// =================== routes/tourRoutes.js ===================
const express = require('express');
const tourController = require('./TourPackageController');
const router = express.Router();

// Define routes
router.post('/', tourController.createTour);
router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTourById);
router.put('/:id', tourController.updateTour);
router.delete('/:id', tourController.deleteTour);

module.exports = router;
