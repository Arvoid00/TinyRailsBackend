module.exports = (app) => {
  const stations = require("../controllers/station.controller.js");

  var router = require("express").Router();

  // Create a new station
  router.post("/", stations.create);

  // Retrieve all stations
  router.get("/", stations.findAll);

  // Retrieve all published stations
  router.get("/published", stations.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", stations.findOne);

  // Update a Tutorial with id
  router.put("/:id", stations.update);

  // Delete a Tutorial with id
  router.delete("/:id", stations.delete);

  // Delete all stations
  router.delete("/", stations.deleteAll);

  app.use("/api/stations/", router);
};
