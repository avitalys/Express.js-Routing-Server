var express = require('express');
var articleRouter = express.Router();

// Chainable route handlers 
articleRouter.route('/')
  .get(function (req, res) {
    res.send('Get article ');
  })
  .post(function (req, res) {
    res.send('Add an article');
  });

articleRouter.get('/about',function (req, res) {
  res.send('About the articles section');
});

articleRouter.route('/:articleId')
  .get((req,res) => {
    res.send(`Get article ${req.params.articleId}`);
  })
  .put((req,res) => {
    res.send(`Update article ${req.params.articleId}`);
  })
  .delete((req,res) => {
    res.send(`Delete article ${req.params.articleId}`);
  });

module.exports = articleRouter;