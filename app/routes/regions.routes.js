module.exports = (app) => {
  const regions = require("../controllers/region.controller.js");

  var router = require("express").Router();

  // Create a new Region
  router.post("/", regions.create);

  // Retrieve all regions
  router.get("/", regions.findAll);

  // Retrieve all published regions
  router.get("/published", regions.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", regions.findOne);

  // Update a Tutorial with id
  router.put("/:id", regions.update);

  // Delete a Tutorial with id
  router.delete("/:id", regions.delete);

  // Delete all regions
  router.delete("/", regions.deleteAll);

  app.use("/api/regions/", router);
};
