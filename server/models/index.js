const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/config.js');

const db = {};

const options = {
  dialect: 'postgres',
  logging: false,
};

if (process.env.DATABASE_URL) {
  db.sequelize = new Sequelize(process.env.DATABASE_URL, options);
} else {
  db.sequelize = new Sequelize('locallist', config.development.username, config.development.password, options);
}

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach((file) => {
    const model = db.sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync();

module.exports = db;
