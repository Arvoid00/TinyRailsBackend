const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");

// ===== CREATE NEW DB FROM SCRATCH ======

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Region = require("./region.model.js")(sequelize, Sequelize);
db.Station = require("./station.model.js")(sequelize, Sequelize);
db.Item = require("./item.model.js")(sequelize, Sequelize);

// db.Region.hasMany(db.Station);
db.Station.belongsTo(db.Region, { foreignKey: { name: "idRegion" } });
// db.Station.hasOne(db.Item, { foreignKey: { name: "test" } });
db.Item.belongsTo(db.Station, { foreignKey: { name: "idItem" } });
// db.Region.hasMany(db.Item, { foreignKey: { name: "idRegion" } });
db.Item.belongsToMany(db.Region, {
  through: "RegionResource",
  sourceKey: "idItem",
  targetKey: "idRegion",
});

// == Test record
// const x = db.Station.create({ name: "Station 1", level: 1, size: 5 });
// console.log("ID " + x.id);

module.exports = db;
