var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

const contact = mongoose.model('Contact', contactSchema);

module.exports = contact;
