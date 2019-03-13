const routes = require('express').Router();
const patientController = require('../controllers/patient-controller');
const appointmentController = require('../controllers/appointment-controller')
const doctorController = require('../controllers/doctor-controller');

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
    .put(doctorController.updateDoctor);

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


module.exports = routes;