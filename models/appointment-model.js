var mongoose = require('mongoose');
var Doctors = require('./doctor-model');
var Patients = require('./patient-model');

var Schema = mongoose.Schema;

var appointmentSchema = new Schema({
  startTime: Number,
  endTime: Number,
  doctor: [{type: Schema.Types.ObjectId, ref: 'Doctor'}],
  patient: [{type: Schema.Types.ObjectId, ref: 'Patient'}],
}); 

module.exports = mongoose.model('Appointments', appointmentSchema);
