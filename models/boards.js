const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class boards extends Model {
    static associate(models) {
      boards.hasMany(models.groups, {
        foreignKey: 'board_id',
      });
    }
  }
  boards.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'boards',
    }
  );
  return boards;
};
