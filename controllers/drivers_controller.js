const Driver = require('../models/driver');

module.exports = {
  greeting: (req, res) => {
    res.send({ hi: 'there' });
  },

  create: (req, res, next) => {
    const driverData = req.body;
    Driver.create(driverData)
      .then((driver) => res.send(driver))
      .catch(next);
  },
};
