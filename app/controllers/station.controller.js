const db = require("../models");
const Station = db.Station;
const Op = db.Sequelize.Op;

// Create and Save a new Station
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Station
  const station = {
    name: req.body.name,
    level: req.body.level,
    size: req.body.size,
    required_demand: req.body.required_demand,
    supplied_demand: req.body.supplied_demand,
    idItem: req.body.idItem,
    idRegion: req.body.region,
  };

  // Save Station in the database
  Station.create(station)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Station.",
      });
    });
};

// Retrieve all Stations from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  const region = req.query.region;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  condition = region ? { idRegion: { [Op.eq]: region } } : null;

  Station.findAll({ attributes: ["idStation", "name"], where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Station with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Station.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Station with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Station with id=" + id,
      });
    });
};

// Update a Station by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Station.update(req.body, {
    where: { idStation: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Station was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Station with id=${id}. Maybe Station was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Station with id=" + id + " " + err,
      });
    });
};

// Delete a Station with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Station.destroy({
    where: { idStation: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Station was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Station with id=${id}. Maybe Station was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Station with id=" + id,
      });
    });
};

// Delete all Stations from the database.
exports.deleteAll = (req, res) => {
  Station.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Stations were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Stations.",
      });
    });
};

// Find all published Stations
exports.findAllPublished = (req, res) => {
  Station.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Stations.",
      });
    });
};
