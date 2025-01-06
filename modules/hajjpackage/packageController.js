const packageService = require('./packageService');

exports.getAllPackages = async (req, res) => {
  try {
    const packages = await packageService.getAllPackages();
    res.status(200).json({ success: true, data: packages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createPackage = async (req, res) => {
  try {
    const packageData = req.body;
    const newPackage = await packageService.createPackage(packageData);
    res.status(201).json({ success: true, data: newPackage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getPackageById = async (req, res) => {
  try {
    const packageId = req.params.id;
    const packageDetails = await packageService.getPackageById(packageId);
    res.status(200).json({ success: true, data: packageDetails });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};


exports.updatePackage = async (req, res) => {
  try {
    const packageId = req.params.id;
    const updateData = req.body;
    const updatedPackage = await packageService.updatePackage(packageId, updateData);
    res.status(200).json({ success: true, data: updatedPackage });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.deletePackage = async (req, res) => {
  try {
    const packageId = req.params.id;
    await packageService.deletePackage(packageId);
    res.status(200).json({ success: true, message: 'Package deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
