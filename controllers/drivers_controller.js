const mongoose = require('mongoose');
module.exports = {
  greeting: (req, res) => {
    res.send({ hi: 'there' });
  },

  create: (req, res) => {
    /* const data = req.body;
    res.send(); */
  },
};