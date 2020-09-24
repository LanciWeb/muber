const app = require('../../app');
const assert = require('assert');
const request = require('supertest');
const mongoose = require('mongoose');
const Driver = mongoose.model('driver');

describe('driver controllers tests', () => {
  it('POST to api/drivers creates a new driver', (done) => {
    Driver.count().then((count) => {
      request(app)
        .post('/api/drivers')
        .send({ email: 'test@test.com' })
        .end((err, response) => {
          Driver.count().then((newCount) => {
            assert(count + 1 === newCount);
            done();
          });
        });
    });
  });

  it('PUT to api/drivers:id edits an existing driver', (done) => {
    const driver = new Driver({ email: 'test@drivers.it' });
    driver.save().then(() => {
      request(app)
        .put(`/api/drivers/${driver._id}`)
        .send({ driving: true })
        .end(() => {
          const updatedDriver = Driver.findOne({
            email: 'test@drivers.it',
          }).then((driver) => assert(driver.driving === true));
          done();
        });
    });
  });

  it('DELETE to api/drivers/:id', (done) => {
    const driver = new Driver({ email: 'test@test.it' });
    driver.save().then(() => {
      request(app)
        .delete(`/api/drivers/${driver._id}`)
        .end(() =>
          Driver.findOne({ email: 'test@test.it' }).then((driver) => {
            assert(driver === null);
            done();
          })
        );
    });
  });

  it('GET to /api/drivers find drivers near', (done) => {
    const seattleDriver = new Driver({
      email: 'test@seattle.it',
      geometry: { type: 'Point', coordinates: [-122.4759902, 47.6147628] },
    });

    const miamiDriver = new Driver({
      email: 'test@miami.it',
      geometry: { type: 'Point', coordinates: [-80.253, 25.791] },
    });

    Promise.all([seattleDriver.save(), miamiDriver.save()]).then(() => {
      request(app)
        .get(`/api/drivers?lng=-80&lnt=25`)
        .end((err, response) => {
          assert(response.body.length === 1);
          assert(response.body[0].email === 'test@miami.it');
          done();
        });
    });
  });
});
