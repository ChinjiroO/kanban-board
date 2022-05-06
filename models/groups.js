const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    static associate(models) {
      groups.hasMany(models.tasks, {
        foreignKey: 'group_id',
      });
      groups.belongsTo(models.boards, {
        foreignKey: 'board_id',
      });
    }
  }
  groups.init(
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
      modelName: 'groups',
    }
  );
  return groups;
};
