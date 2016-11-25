var express = require('express');
var app = express();
app.listen(3000);

app.get('/', function(request, response){
  response.send('Hello');
});

app.get('/about', function(request, response){
  response.send('About page')
  response.send('About page')
})
