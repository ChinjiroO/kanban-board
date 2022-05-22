const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class boards extends Model {
    // static associate(models) {}
  }
  boards.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'boards',
    }
  );
  return boards;
};
