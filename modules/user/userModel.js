const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    birthday: { type: Date, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true },
    biographical: { type: mongoose.Schema.Types.Mixed, required: true },
    status: { type: String, enum: ['public', 'blocked'], default: 'public' },
    role: { type: String, enum: ['Admin', 'Customer', 'Vendor'], required: true },
    vendorCommissionType: { type: String, enum: ['Default', 'percent', 'amount'], default: 'Default' },
    vendorCommissionValue: { type: Number, default: 0 },
    avatar: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
