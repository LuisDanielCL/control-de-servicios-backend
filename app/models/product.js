module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    acquisitionDate: {
      type: Sequelize.DATE,
      allowNull:false,
    },
  });

  return Product;
};