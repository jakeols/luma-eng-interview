const Doctor = require('../models/doctor-model');

// get all doctors
getAllDoctors = ((req, res) => {
    let query = Doctor.find({});
    query.exec((err, doctors) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(doctors);
    });
})

// get doctor by id
getDoctorById = ((req, res) => {
    Doctor.findById(req.params.id, (err, doctor) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(doctor);
    }); 
})

// create doctor
createDoctor = ((req, res) => {
    //Creates a new doctor
    var newDoctor = new Doctor(req.body);
    //Save it into the DB.
    newDoctor.save((err,doctor) => {
        if(err) {
            res.send(err);
        }
        else { 
            res.json({message: "Doctor successfully added!", doctor });
        }
    });
})

module.exports = {
    getAllDoctors,
    getDoctorById,
    createDoctor
}