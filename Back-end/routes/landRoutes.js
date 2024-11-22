const express = require('express');
const router = express.Router();
const authenticateAdmin = require('../middleware/authenticateAdmin');
const {
    createLand,
    getAllLands,
    createLandListing,
    updateLandListing,
    deleteLandListing
} = require('../controllers/landController');

// Land routes
router.post('/lands', createLand);
router.get('/lands', getAllLands);

// LandListing routes
router.post('/landlistings',authenticateAdmin, createLandListing);
router.put('/landlistings/:id',authenticateAdmin, updateLandListing);
router.delete('/landlistings/:id', deleteLandListing);

module.exports = router;
