const TourPackage = require('./TourPackageModel');

// Service functions
exports.createTour = async (data) => {
    const tour = new TourPackage(data);
    return await tour.save();
};

exports.getAllTours = async () => {
    return await TourPackage.find();
};          

exports.getTourById = async (id) => {
    return await TourPackage.findById(id);
};

exports.updateTour = async (id, data) => {
    return await TourPackage.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteTour = async (id) => {
    return await TourPackage.findByIdAndDelete(id);
};
