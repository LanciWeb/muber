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
});
