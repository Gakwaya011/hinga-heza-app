
const LandListing = require('../models/LandListing');

// Create a new land
// src/controllers/landController.js
exports.createLand = async (req, res) => {
    const { area, soilQuality, waterAvailability, climate, description } = req.body;
    try {
        const newLand = await Land.create({ area, soilQuality, waterAvailability, climate, description });
        res.status(201).json(newLand);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create land', details: error.message });
    }
};

// Get all lands with listings
exports.getAllLands = async (req, res) => {
    try {
        const lands = await Land.findAll({
            include: [{ model: LandListing, as: 'listings' }] // Ensure that listings are included
        });
        res.status(200).json(lands);
    } catch (error) {
        console.error('Error fetching lands:', error);
        res.status(500).json({ error: 'Failed to fetch lands', details: error.message });
    }
};

// Update a land by id
exports.updateLand = async (req, res) => {
    try {
        const landId = req.params.id;
        const { area, soilQuality, waterAvailability, climate, description } = req.body;

        const land = await Land.findByPk(landId);
        if (!land) {
            return res.status(404).json({ message: 'Land not found' });
        }

        // Update land with provided data or keep existing values
        land.area = area || land.area;
        land.soilQuality = soilQuality || land.soilQuality;
        land.waterAvailability = waterAvailability || land.waterAvailability;
        land.climate = climate || land.climate;
        land.description = description || land.description;

        await land.save();
        res.status(200).json(land);
    } catch (error) {
        console.error('Error updating land:', error);
        res.status(500).json({ message: 'Error updating land', error: error.message });
    }
};

// Delete a land by id
exports.deleteLand = async (req, res) => {
    try {
        const landId = req.params.id;
        const land = await Land.findByPk(landId);
        if (!land) {
            return res.status(404).json({ message: 'Land not found' });
        }

        await land.destroy();
        res.status(200).json({ message: 'Land deleted successfully' });
    } catch (error) {
        console.error('Error deleting land:', error);
        res.status(500).json({ message: 'Error deleting land', error: error.message });
    }
};

// Create a new land listing
exports.createLandListing = async (req, res) => {
    const { price, status, LandId } = req.body;
    try {
        const newListing = await LandListing.create({ price, status, LandId });
        res.status(201).json(newListing);
    } catch (error) {
        console.error('Error creating land listing:', error);
        res.status(500).json({ error: 'Failed to create land listing', details: error.message });
    }
};

// Update a land listing by id
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
        console.error('Error updating land listing:', error);
        res.status(500).json({ error: 'Failed to update listing', details: error.message });
    }
};

// Delete a land listing by id
exports.deleteLandListing = async (req, res) => {
    const { id } = req.params;
    try {
        const listing = await LandListing.findByPk(id);
        if (!listing) return res.status(404).json({ error: 'Listing not found' });

        await listing.destroy();
        res.status(200).json({ message: 'Listing deleted successfully' });
    } catch (error) {
        console.error('Error deleting land listing:', error);
        res.status(500).json({ error: 'Failed to delete listing', details: error.message });
    }
};
