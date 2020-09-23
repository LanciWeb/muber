const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  app.get('/api', DriversController.greeting);

  //# create driver
  app.post('/api/drivers', DriversController.create);
};
