const Doctor = require('../models/doctor-model');

// get all doctors
getAllDoctors = ((req, res) => {
    let query = Doctor.find({});
    query.exec((err, doctors) => {
        if(err) res.send(err);
        res.json(doctors);
    });
})

// get doctor by id
getDoctorById = ((req, res) => {
    Doctor.findById(req.params.id, (err, doctor) => {
        if(err) res.send(err);
        res.json(doctor);
    }); 
})

// create doctor
createDoctor = ((req, res) => {
    var newDoctor = new Doctor(req.body);
    newDoctor.save((err,doctor) => {
        if(err) {
            res.send(err);
        }
        else { 
            res.json({message: "Doctor successfully added!", doctor });
        }
    });
})

updateDoctor = ((req, res) => {
    Doctor.findById({_id: req.params.id}, (err, doctor) => {
        if(err) res.send(err);
        Object.assign(doctor, req.body).save((err, doctor) => {
            if(err) res.send(err);
            res.json({ message: 'Doctor updated!', doctor });
        });    
    });
})

module.exports = {
    getAllDoctors,
    getDoctorById,
    createDoctor,
    updateDoctor
}