
// =================== models/TourPackage.js ===================
const mongoose = require('mongoose');
const { Schema } = mongoose;

const tourPackageSchema = new Schema({
    title: { type: String, required: true },
    content: { type: Schema.Types.Mixed, required: true },
    category: { type: String, required: true },
    youtubeVideo: { type: String },
    minAdvanceReservations: { type: Number, required: true },
    duration: { type: String, required: true },
    tourMinPeople: { type: Number, required: true },
    tourMaxPeople: { type: Number, required: true },
    faqs: [{ title: String, content: String }],
    remarks: { type: Schema.Types.Mixed },
    itinerary: { type: Schema.Types.Mixed },
    bannerImages: [{ type: String }],
    featureImages: [{ type: String }],
    overview: { type: String },
    location: {
        pickUp: { type: String },
        around: { type: String },
    },
    timing: {
        description: { type: String },
        duration: { type: String },
    },
    inclusion: [{ type: String }],
    exclusion: [{ type: String }],
    description: { type: String },
    additionalInfo: { type: String },
    policy: {
        cancellation: { type: String },
        refund: { type: String },
    },
    includeServices: { type: String },
    excludeServices: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('TourPackage', tourPackageSchema);