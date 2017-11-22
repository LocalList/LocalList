Promise = require('bluebird');

module.exports = (db, DataTypes) => {
  let Job = db.define('job', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER
  })

  Job.associate = (db) => {
    Job.belongsTo(db.user);
  }

  return Job;
}