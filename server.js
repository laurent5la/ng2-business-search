'use strict';
const express = require('express');
const PORT = 8888;
const app = express();
app.get('/:name', function(req, res) {
  var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  var filename = req.params.name;   
  res.sendFile(filename, options, function (err) { 
                                        if (err) { 
                                                  console.log(err);
                                                  res.status(err.status).end();
                                        }
                                      }
  );
});
app.get('/node_modules/:path/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/node_modules/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  var path = req.params.path;
  var fileName = req.params.name;
  var file = path+"/"+fileName;
  res.sendFile(file, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});
app.get('/node_modules/:path/:subpath/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/node_modules/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  var path = req.params.path;
  var subpath = req.params.subpath;
  var fileName = req.params.name;
  var file = path+"/"+subpath+"/"+fileName;
  res.sendFile(file, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.get('/app/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/app/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });

});
app.listen(PORT);
console.log('Running AngularJS 2 on http://localhost:' + PORT);
