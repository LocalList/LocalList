const models = require('../models');

const JsonHeaders = { 'Content-Type': 'application/json' };

module.exports = {
  get: (req, res) => {
    if (req.query && req.query.doerId) {
      models.review.findAll({
        include: [{
          model: models.job,
          where: {
            doerId: req.query.doerId,
          },
        }],
      })
        .then((reviews) => {
          const averageRating =
          reviews
            .map(review => review.rating)
            .reduce((sum, rating) => sum + rating)
            / reviews.length;

          res.writeHead(200, JsonHeaders);
          res.end(JSON.stringify({ averageRating, reviews }));
        });
    } else {
      res.writeHead(400);
      res.end();
    }
  },

  post: (req, res) => {
    if (req.body.rating >= 1 && req.body.rating <= 5) {
      models.job.findById(req.body.jobId)
        .then((job) => {
          if (job.userId === req.user.id) {
            models.review.create(req.body)
              .then((review) => {
                res.writeHead(201);
                res.end(JSON.stringify(review));
              })
              .catch((err) => {
                if (err.name === 'SequelizeUniqueConstraintError') {
                  res.writeHead(400);
                  res.end('review already exists');
                } else {
                  throw err;
                }
              });
          } else {
            res.writeHead(403);
            res.end();
          }
        });
    } else {
      res.writeHead(400);
      res.end('Invalid review score');
    }
  },
};
