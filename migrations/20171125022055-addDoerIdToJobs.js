'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // add column to doer
    queryInterface.addColumn('jobs', 'doerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    // get rid of the collumn
    queryInterface.removeColumn('jobs', 'doerId')
  }
};
