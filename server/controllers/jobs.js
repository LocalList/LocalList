const models = require('../models');
const JsonHeaders = { 'Content-Type': 'application/json' };

const options = {
  include: [{
    model: models.user,
    attributes: ['id', 'username']
  }]
}

module.exports = {
  getOne: (req, res) => {
    models.job.findById(req.params.id, options)
    .then(job => {
      res.writeHead(200, JsonHeaders);
      res.end(JSON.stringify(job));
    })
  },

  getAll: (req, res) => {
    models.job.findAll({ where: req.params, limit: 10 })
    .then(jobs => {
      res.writeHead(200);
      res.end(JSON.stringify(jobs));
    })
  },

  post: (req, res) => {
    const data = Object.assign({}, req.body, {userId: req.user.id});
    models.job.create(data, options)
    .then(job => {
      return models.user.findById(job.userId, {
        attributes: ['id', 'username']
      })
      .then(user => {
        job.dataValues.user = user;
        return job;
      });
    })
    .then(job => {
      res.writeHead(201, JsonHeaders);
      res.end(JSON.stringify(job));
    })
  }
}