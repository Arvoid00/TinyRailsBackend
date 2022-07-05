module.exports = (app) => {
  const items = require("../controllers/item.controller.js");

  var router = require("express").Router();

  // Create a new Item
  router.post("/", items.create);

  // Retrieve all items
  router.get("/", items.findAll);

  // Retrieve all published items
  router.get("/published", items.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", items.findOne);

  // Update an item with id
  router.put("/:id", items.update);

  // Delete an item with id
  router.delete("/:id", items.delete);

  // Delete all items
  router.delete("/", items.deleteAll);

  app.use("/api/items/", router);
};
