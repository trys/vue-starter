var express = require('express')
var app = express()
var routes = require('./src/routes');
var fs = require('fs');

app.use('/static', express.static('dist/static'))

// Split up the routes
var staticRoutes = [];
var dynamicRoutes = [];
routes.map(function(route) {
  // console.log(route.path.indexOf(':'));
  if ( route.path.indexOf(':') !== -1 ) {
    dynamicRoutes.push(route);
  } else {
    staticRoutes.push(route);
  }
})


// Catch dynamic routes and serve the standard index page
dynamicRoutes.map(function(route) {
  app.get(route.path, function(req, res) {
    res.sendFile(checkViewExists('/dynamic'));
  })
});

// Route remaining static routes to their corresponding pages
app.get('*', function (req, res) {
  
  var view = checkViewExists('/not-found');
  staticRoutes.map(function(route) {
    if ( route.path === req.url ) {
      view = checkViewExists( route.path );
    }
  });

  return res.sendFile( view );
})

function checkViewExists(view) {
  var path = __dirname + '/dist' + view + '/index.html';
  return fs.existsSync(path) ? path : __dirname + '/dist/not-found/index.html';
}

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})