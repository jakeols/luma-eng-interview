// patient testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index')
// use chai-http 
chai.use(chaiHttp);

chai.request(app)
    .get('/')
    .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
     });