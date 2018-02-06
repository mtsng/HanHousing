var Location = require('../models/location.model');
var Contact = require('../models/contact.model');

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

exports.addLocation = async function(location, contact) {
  var newContact = new Contact({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
  });

  var newLocation = new Location({
    lat: location.lat,
    lng: location.lng,
    address: location.address,
    label: location.label,
    draggable: location.draggable,
    create_date: new Date()
  });

  newLocation.contact = newContact;

  try {
    var savedLocation = await newLocation.save();
  }
  catch(e) {
    throw Error('Error in POST');
  }

  return savedLocation;
}
