const routes = require('express').Router();
const controller = require('../controllers');
const patientController = require('../controllers/patient-controller');
const appointmentController = require('../controllers/appointment-controller')
const doctorController = require('../controllers/doctor-controller');

// middleware 
routes.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// main route 
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

// doctors resource
  routes.route('/doctors')
    .get(doctorController.getAllDoctors)
    .post(doctorController.createDoctor);
  routes.route('/doctors/:id')
    .get(doctorController.getDoctorById)

// patients resource
  routes.route('/patients')
    .get(patientController.getAllPatients)
    .post(patientController.createPatient);
  routes.route('/patients/:id')
    .get(patientController.getPatientById)

// appointments resource
  routes.route('/appointments')
    .get(appointmentController.getAllAppointments)
    .post(appointmentController.createAppointment);
  routes.route('/appointments/:id')
    .get(appointmentController.getAppointmentById)



// Find a doctor's working hours -> /api/doctors/{id}/
// Book an doctor opening -> POST: /api/appointments/
// Create and update the list of doctor's working hours
//    -> POST: /api/doctors 
//    -> UPDATE: /api/doctors/{id}/hours 


module.exports = routes;