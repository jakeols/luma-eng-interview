const Patient = require('../models/patient-model');

// get all patients
getAllPatients = ((req, res) => {
    let query = Patient.find({});
    query.exec((err, patients) => {
        if(err) res.send(err);
        res.json(patients);
    });
})

// get patient by id
getPatientById = ((req, res) => {
    Patient.findById(req.params.id, (err, patient) => {
        if(err) res.send(err);
        res.json(patient);
    }); 
})

// create patient
createPatient = ((req, res) => {
    var newPatient = new Patient(req.body);
    newPatient.save((err,patient) => {
        if(err) {
            res.send(err);
        }
        else { 
            res.json({message: "Patient successfully added!", patient });
        }
    });
});

module.exports = {
    getAllPatients,
    getPatientById,
    createPatient
}