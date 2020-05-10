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

exports.createService = (req, res) => {

};

exports.deleteProduct = (req, res) => {

};

exports.deleteService = (req, res) => {

};

exports.updateProduct = (req, res) => {

};

exports.updateService = (req, res) => {

};

exports.readProduct = (req, res) => {

};

exports.readService = (req, res) => {

};