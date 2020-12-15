const db = require('../dbSQL/models.js');

const controller = {

  post: (req, res) => {
    db.post(req.body, (err, result) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send('posted');
      }
    })
  },

  get: (req, res) => {
    db.get(req.params.id, async(err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).json(result);
      }
    })
  },

  put: (req, res) => {
    db.put({sku: req.params.id, price: req.body}, async(err, results) => {
      if (err) {
        res.status(400).send(err);
      }
      else {
        res.status(200).send('all done');
      }
    })
  },

  delete: (req, res) => {
    db.delete({sku: req.params.id}, async(err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send("Entry deleted");
      }
    })
  }
}

module.exports = controller;