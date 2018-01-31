var express = require('express');

var router = express.Router();

var housingController = require('../controllers/housing.controller');

router.get('/', housingController.getLocations);

router.post('/', housingController.addLocation);

module.exports = router;
