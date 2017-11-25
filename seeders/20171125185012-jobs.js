'use strict';
const models = require('../server/models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.job.bulkCreate([{
      name: 'mow lawn',
      location: 'San Fransisco',
      userId: 1,
      doerId: null,
    }, {
      name: 'rake leaves',
      location: 'San Fransisco',
      userId: 1,
      doerId: 2,
    }, {
      name: 'walk my dog',
      location: 'Los Angeles',
      userId: 3,
      doerId: 4,
    },
    {
      name: 'make me a sandwich',
      location: 'Los Angles',
      userId: 2,
      doerId: null,
    },
    {
      name: 'clean my room',
      location: 'Danville',
      userId: 1,
      doerId: null,
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  },
};
