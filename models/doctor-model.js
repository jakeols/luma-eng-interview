var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorSchema = new Schema({
  name:  String,
  hours: {
    monday: {start: Number, end: Number },
    tuesday: {start: Number, end: Number },  
    wednesday: {start: Number, end: Number},
    thursday: {start: Number, end: Number},
    friday: {start: Number, end: Number},
    saturday: {start: Number, end: Number},
    sunday: {start: Number, end: Number}
    }
}); 

module.exports = mongoose.model('Doctors', doctorSchema);