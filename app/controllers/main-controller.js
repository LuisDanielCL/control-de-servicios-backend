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
  if (req.query.filter && req.query.direction) options.order = [[req.query.filter, req.query.direction]];
  if (req.query.limit) options.limit = parseInt(req.query.limit);
  if (req.query.offset) options.offset = parseInt(req.query.offset);

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
  const id = req.params.id;

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
  if (!req.body.nextServiceDate || !req.body.productId || !req.body.type || !req.body.state) {
    res.status(400).send({
      message: "nextServiceDate, productId and acquisitionDate cant be empty"
    });
    return;
  }
  const service = {
    state: req.body.state,
    productId: req.body.productId,
    type: req.body.type,
    nextServiceDate: new Date(req.body.nextServiceDate),
  };
  Services.create(service).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Something happened while creating a new service"
    });
  });
};

exports.deleteService = (req, res) => {
  const id = req.params.id;

  Services.destroy({
    where: { id: id }
  })
    .then(num => {
      res.status(200).send({deleted: num});
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Service with id=" + id
      });
    });
};

exports.updateService = (req, res) => {
  if (!req.body.id || !req.body.nextServiceDate || !req.body.productId || !req.body.type || !req.body.state) {
    res.status(400).send({
      message: "id, nextServiceDate, productId, type and state cant be empty"
    });
    return;
  }
  const service = {
    state: req.body.state,
    productId: req.body.productId,
    type: req.body.type,
    nextServiceDate: new Date(req.body.nextServiceDate),
  };
  Services.update(service,{ where: {id: req.body.id } }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Something happened while updating a new service"
    });
  });
};

exports.readService = (req, res) => { // body/optional {direction, filter, limit, offset }
  const options = {include: [Products]};
  if (req.query.filter && req.query.direction) options.order = [[req.query.filter, req.query.direction]];
  if (req.query.limit) options.limit = parseInt(req.query.limit);
  if (req.query.offset) options.offset = parseInt(req.query.offset);

  Services.findAll(options)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving services."
      });
    });
};

exports.countServices = (req, res) => {
  Services.count({})
    .then(data => {
      res.status(200).send({count: data});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving count of services."
      });
    });
};