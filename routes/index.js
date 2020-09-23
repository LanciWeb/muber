module.exports = (app) => {
  app.get('/api', (req, res) => {
    return res.send({ hi: 'there' });
  });
};
