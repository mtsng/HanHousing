var housingService = require('../services/housing.service');

_this = this;

exports.getLocations = async function(req, res, next){

  try {
    var locations = await housingService.getLocations();
  }
  catch(e) {
    return res.status(400).json({status: 400, message: e.message});
  }

  return res.status(200).json({status: 200, data: locations, message: "Success"});
}

exports.addLocation = async function(req, res, next){
  var location = {
    lat: req.body.lat,
    lng: req.body.lng,
    address: req.body.address,
    label: req.body.label,
    draggable: req.body.draggable
  };

  var contact = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
  };

  try {
    var addedLocation = await housingService.addLocation(location, contact);
  }
  catch(e) {
    return res.status(400).json({status: 400, message: "Location was not added", data: "" + e});
  }

  return res.status(201).json({status: 201, data: addedLocation, message: "Location added"});
}
