'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('jobs', 'complete', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('jobs', 'complete');
  },
};
