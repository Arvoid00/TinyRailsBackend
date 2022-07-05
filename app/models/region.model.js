module.exports = (sequelize, Sequelize) => {
  const Region = sequelize.define("region", {
    idRegion: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Region;
};
