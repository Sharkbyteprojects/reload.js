const app = require('express')();
app.get('/', function(req, res){
  res.sendFile(__dirname + '/test.html');
});
const io = require('./reloader.js')(app,__dirname);
io.listen(8080,()=>{console.log("Server listen on 8080");})