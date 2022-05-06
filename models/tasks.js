const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class tasks extends Model {
    static associate(models) {
      tasks.belongsTo(models.groups, {
        foreignKey: 'group_id',
      });
    }
  }
  tasks.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'tasks',
    }
  );
  return tasks;
};
