var express = require('express');
var userRouter = express.Router();

userRouter.route('/')
  .get(function (req, res) {
    res.send('Get list of users');
  });

// GET user route parameters
userRouter.get('/:userId', function (req, res){
  res.send(`GET request to the user ${req.params.userId}`);
});

// Chainable route handlers 
userRouter.route('/:userId/Todos')
  .get(function (req, res) {
    res.send(`Get list of Todos for user ${req.params.userId}`);
  })
  .post(function (req, res) {
    res.send('Add a Todo');
  })
  .put(function (req, res) {
    res.send('Update the Todos');
  });
  
module.exports = userRouter;