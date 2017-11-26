module.exports = (db, DataTypes) => {
  const Review = db.define('review', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jobId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    message: DataTypes.TEXT,
  });

  Review.associate = (db) => {
    Review.belongsTo(db.job);
  };

  return Review;
};
