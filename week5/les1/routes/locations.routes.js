const { Router } = require('express');
const {getLocations, addLocation} = require('../controllers/locations.controllers');
const router = Router();

router.get('/locations', getLocations);
router.post('/locations', addLocation);

module.exports = router;


