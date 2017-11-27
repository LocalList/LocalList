module.exports = (db, DataTypes) => {
  const Job = db.define('job', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    doerId: DataTypes.INTEGER,
  });

  Job.associate = (db) => {
    Job.belongsTo(db.user);
    Job.belongsTo(db.user, { as: 'doer' });
    Job.hasOne(db.review);
  };

  return Job;
};
