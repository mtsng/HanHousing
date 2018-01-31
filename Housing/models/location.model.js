var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
  title: String,
  description: String,
  create_date: Date
});

const location = mongoose.model('Location', locationSchema);

module.exports = location;
