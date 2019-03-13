let mongoose = require("mongoose");
let Doctor = require('../models/doctor-model');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Doctors', () => {
    beforeEach((done) => { 
        Doctor.remove({}, (err) => { 
            done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET doctor', () => {
      it('it should GET all the Doctors', (done) => {
        chai.request(server)
            .get('/api/doctors')
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
  it('it should POST a doctor ', (done) => {
          let doctor = {
            name:  "Doctor Name",
            hours: {
              monday: {start: 1, end: 2 },
              tuesday: {start: 1, end: 2 },  
              wednesday: {start: 1, end: 2},
              thursday: {start: 1, end: 2},
              friday: {start: 1, end: 2},
              saturday: {start: 1, end: 2},
              sunday: {start: 1, end: 2}
              }
        }
        chai.request(server)
            .post('/api/doctors')
            .send(doctor)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.doctor.should.have.property('name');
                  res.body.doctor.should.have.property('hours');
              done();
            });
      });

});