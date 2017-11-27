'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addConstraint('users', ['username'], {
      type: 'unique',
      name: 'uniqueUsername',
    });
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeConstraint('users', 'uniqueUsername');
  },
};
