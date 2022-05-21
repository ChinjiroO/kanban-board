module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'test_users_1',
          email: 'test@example.com',
          password: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'test_users_2',
          email: 'test2@example.com',
          password: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
