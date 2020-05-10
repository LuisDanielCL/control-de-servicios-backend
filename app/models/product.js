module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
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