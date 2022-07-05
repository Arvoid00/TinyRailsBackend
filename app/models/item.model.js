module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    idItem: {
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

  return Item;
};
