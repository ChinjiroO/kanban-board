const bcrypt = require('bcrypt');

const plainText = '1234';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'test01',
          email: 'test_01@example.com',
          password: bcrypt.hashSync(plainText, 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'test02',
          email: 'test_02@example.com',
          password: bcrypt.hashSync(plainText, 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'test03',
          email: 'test_03@example.com',
          password: bcrypt.hashSync(plainText, 8),
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
