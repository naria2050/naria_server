const mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true }, // e.g., "10 days"
  type: { type: String, required: true },    // e.g., "Hajj" or "Umrah"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Package', PackageSchema);
