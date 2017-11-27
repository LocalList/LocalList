'use strict';
const models = require('../server/models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.job.bulkCreate([{
      name: 'mow lawn',
      location: 'San Francisco',
      userId: 1,
      doerId: null,
      complete: false,
    }, {
      name: 'rake leaves',
      location: 'San Francisco',
      userId: 1,
      doerId: 2,
      complete: true,
    }, {
      name: 'walk my dog',
      location: 'Los Angeles',
      userId: 3,
      doerId: 4,
      complete: true,
    },
    {
      name: 'make me a sandwich',
      location: 'Los Angeles',
      userId: 2,
      doerId: null,
      complete: false,
    },
    {
      name: 'clean my room',
      location: 'Danville',
      userId: 1,
      doerId: null,
      complete: false,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  },
};
