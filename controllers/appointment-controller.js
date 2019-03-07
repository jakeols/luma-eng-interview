// appointment controller
const Appointment = require('../models/appointment-model');

// get all
getAllAppointments = ((req, res) => {
    let query = Appointment.find({});
    query.exec((err, appointments) => {
        if(err) res.send(err);
        res.json(appointments);
    })
})

// get by id
getAppointmentById = ((req, res) => {
    Appointment.findById(req.params.id, (err, appointment) => {
        if(err) res.send(err);

        res.json(appointment);
    })
})

// post
createAppointment = ((req, res) => {
    // this is where it gets tricky, do this later
        //Creates a new doctor
        var newAppointment = new Appointment(req.body);
        //Save it into the DB.
        newAppointment.save((err,appointment) => {
            if(err) {
                res.send(err);
            }
            else { 
                res.json({message: "appointment successfully added!", appointment });
            }
        });
})


module.exports = {
    getAllAppointments,
    getAppointmentById,
    createAppointment
}