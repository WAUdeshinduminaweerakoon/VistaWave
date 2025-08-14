const express = require('express');
const router = express.Router();
const {
  getDestinations,
  getDestinationById,
  addDestination,
  updateDestination,
  deleteDestination
} = require('../controllers/destinationController');

router.get('/', getDestinations);
router.get('/:id', getDestinationById);
router.post('/', addDestination); // Admin only (auth can be added later)
router.put('/:id', updateDestination);
router.delete('/:id', deleteDestination);

module.exports = router;
