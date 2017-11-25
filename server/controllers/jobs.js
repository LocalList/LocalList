const models = require('../models');
const JsonHeaders = { 'Content-Type': 'application/json' };

const options = {
  include: [{
    model: models.user,
    attributes: ['id', 'username']
  }, 
  {
    association: 'doer',
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
    models.job.findAll({ where: req.query, limit: 10 })
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
  },

  claim: (req, res) => {
    console.log('user:', req.user);
    if (!req.user) {
      res.writeHead(401);
      res.end();
    } else {
      models.job.update({ doerId: req.user.id }, { where: { id: req.params.id }, returning: true })
        .then((result) => {
          res.writeHead(200);
          res.end(JSON.stringify(result[1][0]));
        });
    }
  },
};
