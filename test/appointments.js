let mongoose = require("mongoose");
let Appointment = require('../models/appointment-model');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Appointments', () => {
    beforeEach((done) => { 
        Appointment.remove({}, (err) => { 
            done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET doctor', () => {
      it('it should GET all the appointments', (done) => {
        chai.request(server)
            .get('/api/appointments')
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
  it('it should POST a appointment ', (done) => {
          let appointment = {
            startTime:  10,
            endTime:  11,
        }
        chai.request(server)
            .post('/api/appointments')
            .send(appointment)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.appointment.should.have.property('startTime');
                  res.body.appointment.should.have.property('endTime');
              done();
            });
      });

});
