const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class boards extends Model {
    static associate(models) {
      boards.belongsTo(models.users, {
        foreignKey: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'boards',
    }
  );
  return boards;
};
