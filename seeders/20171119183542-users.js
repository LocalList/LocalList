'use strict';
const models = require('../server/models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.user.bulkCreate([{
      username: 'Jackson',
      password: 'password',
    }, {
      username: 'Brandon',
      password: 'password',
    }, {
      username: 'Jinxuan',
      password: 'password',
    },
    {
      username: 'Sean',
      password: 'password',
    },
    {
      username: 'Kirk',
      password: 'password',
    },
    {
      username: 'Tom',
      password: 'password',
    }], { individualHooks: true });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};
