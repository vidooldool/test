  var express = require('express');
  var app = express();

  app.get('/', function(req, res){
      res.send('Hello NAVER Cloud Platform!!');
  });

  app.listen(8000, function(){
      console.log('Connected!!');
      console.log('by bidooldool ~');
      console.log('changed');
  });