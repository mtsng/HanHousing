var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

var locationSchema = new mongoose.Schema({
  contact: contactSchema,
  lat: Number,
  lng: Number,
  address: String,
  label: String,
  draggable: Boolean,
  create_date: Date
});

const location = mongoose.model('Location', locationSchema);

module.exports = location;
