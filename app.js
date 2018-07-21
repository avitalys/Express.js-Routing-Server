var express = require('express');
var articlesRoutes = require('./routes/articlesRoutes');
var commonRoutes = require('./routes/commonRoutes');
var usersRoutes = require('./routes/usersRoutes');
var app = express();

app.get("/homepage", function(req,res){
  res.send("<h1>Welcome to our first app</h1>")
});

// Application-Level load of a route module 
// 'commonRoute' is loaded with no mount path
app.use(commonRoutes);

// Load 'users' routes module
app.use('/users', usersRoutes);

// Load 'articles' routes module
app.use('/articles', articlesRoutes);

// Listen to the environment variable PORT or PORT 3500
app.listen(process.env.PORT||3500, function () {
    console.log("server is listening on port 3500");
});