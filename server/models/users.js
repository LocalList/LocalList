Promise = require('bluebird');
const bcrypt = require('bcrypt');

module.exports = (db, DataTypes) => {
  let User = db.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = (db) => {
    User.hasMany(db.job, { foreignKey: 'userId' });
    User.hasMany(db.job, { foreignKey: 'doerId', as: 'claimedJob' });
  }

  User.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10)
    .then(hash => {
        user.password = hash;
    })
    .catch((err) => {
        console.log('oh no', err);
    })
  });

  User.prototype.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
  }
  
  return User;
}