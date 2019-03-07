var mongoose = require('mongoose');
var appointmentSchema = require('./appointment-model');
var Schema = mongoose.Schema;

var patientModel = new Schema({
  name:  String,
}); 

module.exports = mongoose.model('Patients', patientModel);