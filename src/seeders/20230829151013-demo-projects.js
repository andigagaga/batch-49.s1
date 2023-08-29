'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('projets', [
      {
        name: 'andi',
        start_date:'2021-08-12',
        end_date: '2022-08-12',
        duration: '2 bulan',
        description: 'apa sih kamu',
        react: true,
        java: false,
        node_js: true,
        socket_io: false,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
      name: 'andi',
      start_date:'2021-08-12',
      end_date: '2022-08-12',
      duration: '2 bulan',
      description: 'apa sih kamu',
      react: true,
      java: false,
      node_js: true,
      socket_io: false,
      createdAt: new Date(),
      updatedAt: new Date()
  }
  ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
