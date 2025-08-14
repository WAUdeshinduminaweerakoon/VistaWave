const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true }, // Adventure, Luxury, Culture
  description: { type: String, required: true },
  photos: [String], // Array of Cloudinary image URLs
  videoUrl: String, // Cloudinary video URL
}, { timestamps: true });



module.exports = mongoose.model('Destination', DestinationSchema);
