var Location = require('../models/location.model');

_this = this;

exports.getLocations = async function(){

  try {
    var locations = await Location.find();
  }
  catch(e) {
    throw Error('Error in GET');
  }

  return locations;
}

exports.addLocation = async function(location) {
  var newLocation = new Location({
    title: location.title,
    description: location.description,
    create_date: new Date()
  });

  try {
    var savedLocation = await newLocation.save();
  }
  catch(e) {
    throw Error('Error in POST');
  }

  return savedLocation;
}
