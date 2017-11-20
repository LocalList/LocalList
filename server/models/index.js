const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/config.js');

let db = {};

let options = {
  dialect: 'postgres',
  logging: false
};

if (process.env.DATABASE_URL) {
	db.sequelize = new Sequelize(process.env.DATABASE_URL, options);
} else {
	db.sequelize = new Sequelize('locallist', config.development.username, config.development.password, options);
}

db.sequelize
.authenticate()
.then(() => {
console.log('Connection has been established successfully.');
})
.catch(err => {
console.error('Unable to connect to the database:', err);
});

fs
.readdirSync(__dirname)
.filter(file => file !== "index.js")
.forEach(file => {
  let model = db.sequelize.import(path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync();

module.exports = db;