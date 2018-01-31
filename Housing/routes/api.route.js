var express = require('express');

var router = express.Router();
var housing = require('./housing.route');

router.use('/housing', housing);

module.exports = router;
