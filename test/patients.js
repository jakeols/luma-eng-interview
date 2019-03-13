let mongoose = require("mongoose");
let Patient = require('../models/patient-model');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Patients', () => {
    beforeEach((done) => { 
        Patient.remove({}, (err) => { 
            done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET patient', () => {
      it('it should GET all the patients', (done) => {
        chai.request(server)
            .get('/api/patients')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

  /*
  * Test the /POST route
  */ 
  it('it should POST a patient ', (done) => {
          let patient = {
            name:  "Patient Name",
        }
        chai.request(server)
            .post('/api/patients')
            .send(patient)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.patient.should.have.property('name');
              done();
            });
      });

});
