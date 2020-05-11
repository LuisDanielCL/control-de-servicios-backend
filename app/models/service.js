module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define("service", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nextServiceDate: {
      type: Sequelize.DATE
    },
    productId: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull:false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull:false,
    },
  });

  return Service;
};