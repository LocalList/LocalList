'use strict';
const models = require('../server/models');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.job.bulkCreate([{
      'id': 1,
      'name': 'Voltsillam',
      'location': 'Utrecht (stad)',
      'userId': 1,
      'doerId': 4,
      'complete': true
    }, {
      'id': 2,
      'name': 'Toughjoyfax',
      'location': 'Stockholm',
      'userId': 4,
      'doerId': 2,
      'complete': true
    }, {
      'id': 3,
      'name': 'Span',
      'location': 'Dzików Stary',
      'userId': 1,
      'doerId': 3,
      'complete': true
    }, {
      'id': 4,
      'name': 'Holdlamis',
      'location': 'Singojuruh',
      'userId': 4,
      'doerId': 1,
      'complete': false
    }, {
      'id': 5,
      'name': 'Overhold',
      'location': 'Solok',
      'userId': 4,
      'doerId': 1,
      'complete': true
    }, {
      'id': 6,
      'name': 'Duobam',
      'location': 'Wanjia',
      'userId': 1,
      'doerId': 2,
      'complete': false
    }], {individualHooks: true}); 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('jobs', null, {});
  },
};
