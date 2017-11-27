'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('jobs', 'doerId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('jobs', 'doerId');
  },
};
