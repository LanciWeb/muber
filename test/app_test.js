const app = require('../app');
const assert = require('assert');
const request = require('supertest');

describe('The express app', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        console.log(response);
        assert(response.status === 200);
        assert(response.body.hi === 'there');
        done();
      });
  });
});
