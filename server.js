  var express = require('express');
  var app = express();

  app.get('/', function(req, res){
      //res.send('Hello NAVER Cloud Platform!!');
      res.send('by bidooldool ~');
      //res.send('changed');
  });

  app.get('/cello', function(req, res){
      //res.send('Hello NAVER Cloud Platform!!');
      res.send('hi cello');
      //res.send('changed');
  });

  app.get('/wonjuFam', function(req, res){
      //res.send('Hello NAVER Cloud Platform!!');
      res.send('원주 홈페이지');
      //res.send('changed');
  });

  app.listen(8000, function(){
      console.log('Connected!!');
  });