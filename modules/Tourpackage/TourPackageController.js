// =================== controllers/tourController.js ===================
const tourService = require('./TourPackagrServices');

// Controller functions
exports.createTour = async (req, res) => {
    try {
        const tour = await tourService.createTour(req.body);
        res.status(201).json(tour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


exports.getAllTours = async (req, res) => {
    try {
        const tours = await tourService.getAllTours();
        res.status(200).json(tours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.getTourById = async (req, res) => {
    try {
        const tour = await tourService.getTourById(req.params.id);
        if (!tour) return res.status(404).json({ message: 'Tour package not found' });
        res.status(200).json(tour);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateTour = async (req, res) => {
    try {
        const tour = await tourService.updateTour(req.params.id, req.body);
        if (!tour) return res.status(404).json({ message: 'Tour package not found' });
        res.status(200).json(tour);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



exports.deleteTour = async (req, res) => {
    try {
        const tour = await tourService.deleteTour(req.params.id);
        if (!tour) return res.status(404).json({ message: 'Tour package not found' });
        res.status(200).json({ message: 'Tour package deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
