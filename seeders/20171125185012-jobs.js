'use strict';
const models = require('../server/models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.job.bulkCreate([{
      name: 'Mow my lawn',
      location: 'San Francisco',
      userId: 1,
      doerId: null,
      complete: false,
    }, {
      name: 'Rake leaves',
      location: 'San Francisco',
      userId: 1,
      doerId: 2,
      complete: true,
    }, {
      name: 'Walk my dog',
      location: 'Los Angeles',
      userId: 3,
      doerId: 4,
      complete: true,
    },
    {
      name: 'Make me a sandwich',
      location: 'Los Angeles',
      userId: 2,
      doerId: null,
      complete: false,
    },
    {
      name: 'Clean my room',
      location: 'San Francisco',
      userId: 1,
      doerId: null,
      complete: false,
    },
    {
      name: 'Clean my room',
      location: 'Los Angeles',
      userId: 2,
      doerId: null,
      complete: false,
    },
    {
      name: 'Clean my room',
      location: 'San Francisco',
      userId: 5,
      doerId: null,
      complete: false,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  },
};
