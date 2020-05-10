module.exports = app => {
  const controller = require("../controllers/main-controller.js");

  var router = require("express").Router();

  router.post("/product", controller.createProduct);
  router.get("/product", controller.readProduct);
  router.get("/product/:id", controller.getProductById);
  router.delete("/product", controller.deleteProduct);
  router.put("/product", controller.updateProduct);
  router.get("/products/count", controller.countProducts);


  app.use('/api', router);
};