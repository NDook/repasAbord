const models = require("../models");

const getAll = (req, res) => {
  models.train
    .getTrainsTicketsClients()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAll,
};
