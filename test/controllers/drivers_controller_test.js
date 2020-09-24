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
});
