const express = require('express');
const router = express.Router();
const landController = require('../controllers/landController');  

const { authenticateAdmin } = require('../middleware/authenticateAdmin');

// POST create a new land
router.post('/lands',authenticateAdmin, landController.createLand);

// GET all lands with listings
router.get('/lands', landController.getAllLands);

// PUT update a land by id
router.put('/lands/:id',authenticateAdmin, landController.updateLand);

// DELETE a land by id
router.delete('/lands/:id',authenticateAdmin, landController.deleteLand);

// POST create a new land listing
router.post('/listings',authenticateAdmin, landController.createLandListing);

// PUT update a land listing
router.put('/listings/:id',authenticateAdmin, landController.updateLandListing);

// DELETE a land listing
router.delete('/listings/:id',authenticateAdmin, landController.deleteLandListing);

module.exports = router;
