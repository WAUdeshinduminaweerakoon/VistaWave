const Destination = require('../models/Destination');

// GET all destinations
exports.getDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET single destination
exports.getDestinationById = async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: "Not found" });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST add destination
exports.addDestination = async (req, res) => {
  try {
    const newDestination = new Destination(req.body);
    await newDestination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update destination
exports.updateDestination = async (req, res) => {
  try {
    const updated = await Destination.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE destination
exports.deleteDestination = async (req, res) => {
  try {
    await Destination.findByIdAndDelete(req.params.id);
    res.json({ message: "Destination deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
