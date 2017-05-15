  var express = require('express');
  var app = express();
  var fs = require('fs');

  app.get('/', function(req, res){
      //res.send('Hello NAVER Cloud Platform!!');
      res.send('by bidooldool ~');
      res._write
      //res.send('changed');
  });

  app.get('/cello', function(req, res){
      //res.send('Hello NAVER Cloud Platform!!');
      res.send('hi cello <br> I love 민아찡');
      fs.readFile('minazzing.jpg', function(error, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(data);
      });
      //res.send('changed');
  });

  app.get('/wonjuFam', function(req, res){
      //res.send('Hello NAVER Cloud Platform!!');
      res.send('원주 홈페이지 <br> 차츰 업데이트 예정. 5월안으로 완공.');
      //res.send('changed');
  });

  app.listen(8000, function(){
      console.log('Connected!!');
  });