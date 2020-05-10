const db = require("../models");
const Products = db.product;
const Services = db.service;
const Op = db.Sequelize.Op;


exports.createProduct = (req, res) => {
  if (!req.body.id || !req.body.name || !req.body.acquisitionDate) {
    res.status(400).send({
      message: "id, name and acquisitionDate cant be empty"
    });
    return;
  }
  const product = {
    id: req.body.id,
    name: req.body.name,
    acquisitionDate: new Date(req.body.acquisitionDate),
  };
  Products.create(product).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Something happened while creating a new product"
    });
  });
};

exports.updateProduct = (req, res) => {
  if (!req.body.id || !req.body.name || !req.body.acquisitionDate) {
    res.status(400).send({
      message: "id, name and acquisitionDate cant be empty"
    });
    return;
  }
  const product = {
    name: req.body.name,
    acquisitionDate: new Date(req.body.acquisitionDate),
  };
  Products.update(product,{ where: {id: req.body.id } }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Something happened while updating a new product"
    });
  });
};


exports.readProduct = (req, res) => { // body/optional {direction, filter, limit, offset }
  const options = {};
  if (req.body.filter && req.body.direction) options.order = [[req.body.filter, req.body.direction]];
  if (req.body.limit) options.limit = req.body.limit;
  if (req.body.offset) options.offset = req.body.offset;

  Products.findAll(options)
    .then(data => {

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};

exports.countProducts = (req, res) => {
  Products.count({})
    .then(data => {
      res.status(200).send({count: data});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving count of products."
      });
    });
};

exports.deleteProduct = (req, res) => {
  if (!req.body.id) {
    res.status(400).send({
      message: "id required"
    });
    return;
  }
  const id = req.body.id;

  Products.destroy({
    where: { id: id }
  })
    .then(num => {
      res.status(200).send({deleted: num});
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Product with id=" + id
      });
    });
};

exports.getProductById = (req, res) => {
  const id = req.params.id;
  Products.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Product with id=" + id
      });
    });
}



exports.createService = (req, res) => {

};

exports.deleteService = (req, res) => {

};


exports.updateService = (req, res) => {

};

exports.readService = (req, res) => {

};