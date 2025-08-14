const express = require('express');
const router = express.Router();
const {
  getDestinations,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinationController');

const { upload } = require('../config/cloudinary');

const mongoose = require('mongoose');

module.exports = mongoose.model('Destination', destinationSchema);// This is correct

router.get('/', getDestinations);
router.get('/:id', getDestinationById);
router.post('/', addDestination); // Admin only (auth can be added later)
router.put('/:id', updateDestination);
router.delete('/:id', deleteDestination);

router.post('/upload', upload.fields([
  { name: 'photos', maxCount: 5 },
  { name: 'video', maxCount: 1 }
]), async (req, res) => {
  try {
    const photoUrls = req.files.photos.map(file => file.path);
    const videoUrl = req.files.video[0].path;

    const newDestination = new Destination({
      ...req.body,
      photos: photoUrls,
      videoUrl
    });

    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;