const Land = require('../models/land');
const LandListing = require('../models/LandListing');

// Create a new land
exports.createLand = async (req, res) => {
    const { area, soilQuality, waterAvailability, climate, description } = req.body;
    try {
        const newLand = await Land.create({ area, soilQuality, waterAvailability, climate, description });
        res.status(201).json(newLand);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create land', details: error.message });
    }
};

// Get all lands
exports.getAllLands = async (req, res) => {
    try {
        const lands = await Land.findAll({ include: [{ model: LandListing, as: 'listings' }] });
        res.status(200).json(lands);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch lands', details: error.message });
    }
};

// Create a new land listing
exports.createLandListing = async (req, res) => {
    const { price, status, LandId } = req.body;
    try {
        const newListing = await LandListing.create({ price, status, LandId });
        res.status(201).json(newListing);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create land listing', details: error.message });
    }
};

// Update a land listing
exports.updateLandListing = async (req, res) => {
    const { id } = req.params;
    const { price, status } = req.body;
    try {
        const listing = await LandListing.findByPk(id);
        if (!listing) return res.status(404).json({ error: 'Listing not found' });

        listing.price = price || listing.price;
        listing.status = status || listing.status;
        await listing.save();
        res.status(200).json(listing);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update listing', details: error.message });
    }
};

// Delete a land listing
exports.deleteLandListing = async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await LandListing.findByPk(id);
        if (!listing) return res.status(404).json({ error: 'Listing not found' });

        await listing.destroy();
        res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete listing', details: error.message });
    }
};
