'use strict';
 const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     var usersToAdd = [];
     for(let i=0; i<20; i++){
       let randomData = {
          // user.username= faker.name.lastName()
          // user.email= faker.internet.email()
          // user.password= faker.internet.password()
          // user.role= faker.random.arrayElement(['admin','author','author','author'])
          // user.createdAt= faker.date.between(2000,2021)
          // user.updatedAt= faker.date.recent(user.createdAt.toFullYear(),2021)
           username: faker.internet.userName(),
           email: faker.internet.email(),
           password: faker.internet.password(),
           role: faker.random.arrayElement(['admin','author','author','author']),
           createdAt: faker.date.between(2000,2021),
           updatedAt: faker.date.recent()
         };
         usersToAdd.push(randomData);
     }
      await queryInterface.bulkInsert('Users', usersToAdd, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
