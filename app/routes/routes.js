module.exports = app => {
  const controller = require("../controllers/main-controller.js");

  var router = require("express").Router();

  router.post("/product", controller.createProduct);

  app.use('/api', router);
};