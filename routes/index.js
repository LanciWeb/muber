const DriversController = require('../controllers/drivers_controller');

module.exports = (app) => {
  app.get('/api', DriversController.greeting);

  //# create driver
  app.post('/api/drivers', DriversController.create);

  //#edit driver
  app.put('/api/drivers/:id', DriversController.edit);

  //#delete driver
  app.delete('/api/drivers/:id', DriversController.delete);
};
