var express = require ('express');
var path = require('path');
var app = express();
app.use(express.static('./public'));
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(3000);
console.log("server is running at port 3000");