module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'boards',
      [
        {
          name: 'marketing',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'financial',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'DBMS',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('boards', null, {});
  },
};
