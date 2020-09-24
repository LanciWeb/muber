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

  edit: (req, res, next) => {
    const id = req.params.id;
    const driverData = req.body;

    Driver.findByIdAndUpdate(id, driverData)
      .then(() => Driver.findById(id))
      .then((driver) => res.send(driver))
      .catch(next);
  },
};
