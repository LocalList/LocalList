const models = require('../models');

const JsonHeaders = { 'Content-Type': 'application/json' };

const options = {
  include: [{
    model: models.user,
    attributes: ['id', 'username'],
  },
  {
    association: 'doer',
    attributes: ['id', 'username'],
  }, {
    model: models.review,
  }],
};

module.exports = {
  getOne: (req, res) => {
    models.job.findById(req.params.id, options)
      .then((job) => {
        res.writeHead(200, JsonHeaders);
        res.end(JSON.stringify(job));
      });
  },

  getAll: (req, res) => {
    models.job.findAll({
      where: req.query,
      limit: 10,
      include: {
        model: models.user,
        attributes: ['username'],
      },
    })
      .then((jobs) => {
        res.writeHead(200, JsonHeaders);
        res.end(JSON.stringify(jobs));
      })
      .catch(() => {
        res.writeHead(400);
        res.end();
      });
  },

  post: (req, res) => {
    const data = Object.assign({}, req.body, { userId: req.user.id });
    models.job.create(data, options)
      .then(job => models.user.findById(job.userId, {
        attributes: ['id', 'username'],
      })
        .then((user) => {
          job.dataValues.user = user;
          return job;
        }))
      .then((job) => {
        res.writeHead(201, JsonHeaders);
        res.end(JSON.stringify(job));
      });
  },

  markCom: (req, res) => {
    models.job.findById(req.params.id, options)
      .then(job => job.dataValues.doerId)
      .then((doerId) => {
        if (req.user.attributes.id === doerId) {
          res.write(403);
          res.end();
        } else {
          models.job.update({ complete: true }, { where: { id: req.params.id }, returning: true })
            .then((result) => {
              res.writeHead(200);
              res.end(JSON.stringify(result[1][0]));
            });
        }
      });
  },

  claim: (req, res) => {
    models.job.update({ doerId: req.user.id }, { where: { id: req.params.id }, returning: true })
      .then((result) => {
        res.writeHead(200);
        res.end(JSON.stringify(result[1][0]));
      });
  },
};
