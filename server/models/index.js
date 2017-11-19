const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/config.js');

let db = {};

if (process.env.DATABASE_URL) {
	db.sequelize = new Sequelize(process.env.DATABASE_URL, {
	  dialect: 'postgres'
	});
} else {
	db.sequelize = new Sequelize('locallist', config.development.username, config.development.password, {
	  dialect: 'postgres'
	});
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