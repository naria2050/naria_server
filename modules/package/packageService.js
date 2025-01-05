const Package = require('./packageModel');

exports.getAllPackages = async () => {
  return await Package.find();
};

exports.createPackage = async (data) => {
  return await Package.create(data);
};

exports.getPackageById = async (id) => {
  return await Package.findById(id);
};

exports.updatePackage = async (id, data) => {
  return await Package.findByIdAndUpdate(id, data, { new: true });
};

exports.deletePackage = async (id) => {
  return await Package.findByIdAndDelete(id);
};
