module.exports = app => {
  const controller = require("../controllers/main-controller.js");

  var router = require("express").Router();

  //Product
  router.post("/product", controller.createProduct);
  router.get("/product", controller.readProduct);
  router.get("/product/:id", controller.getProductById);
  router.delete("/product/:id", controller.deleteProduct);
  router.put("/product", controller.updateProduct);
  router.get("/products/count", controller.countProducts);

  //Service
  router.post("/service", controller.createService);
  router.get("/service", controller.readService);
  router.delete("/service/:id", controller.deleteService);
  router.put("/service", controller.updateService);
  router.get("/services/count", controller.countServices);


  app.use('/api', router);
};