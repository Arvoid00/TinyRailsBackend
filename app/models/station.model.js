module.exports = (sequelize, Sequelize) => {
  const Station = sequelize.define("station", {
    idStation: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    level: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    size: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    required_demand: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    supplied_demand: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    // idItem: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "items",
    //     key: "idItem",
    //   },
    // },
  });

  return Station;
};
