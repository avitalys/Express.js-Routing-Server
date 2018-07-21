var express = require('express');
var router = express.Router();

// Route-Level middleware with no mount path.
// Attach a middleware logging request's time and path
router.use(function timeLog(req, res, next) {
  var requestTime = new Date(Date.now());
  console.log(`Date: ${requestTime.toLocaleDateString()}, \
    Time: ${requestTime.toLocaleTimeString()}, \
    Request Method: ${req.method}, \
    Request Path: ${req.originalUrl}`);
  next();
});

// Attach a middleware logging access to "secret section"
router.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
})

// Define the home page route
router.get('/', function (req, res) {
  res.send('GET request to the homepage');
});

// Define the about route
router.get('/about', function (req, res) {
  res.send('GET request to the about page');
});

module.exports = router;