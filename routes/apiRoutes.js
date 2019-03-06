var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/customer", function(req, res) {
    db.customer.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/customerName", function(req, res) {
    db.customer.findAll({}).then(function(data) {
      console.log(data);
      res.json(data);
    });
  });

  // Create a new example
  app.post("/api/customer", function(req, res) {
    db.customer.create(req.body).then(function(dbExample) {
      res.json(dbExample);
      console.log(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
