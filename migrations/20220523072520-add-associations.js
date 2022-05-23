module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('boards', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('boards', 'user_id');
  },
};
