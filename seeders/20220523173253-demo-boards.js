module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'boards',
      [
        {
          name: 'board-01',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'board-02',
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'board-03',
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'board-04',
          user_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('boards', null, {});
  },
};
