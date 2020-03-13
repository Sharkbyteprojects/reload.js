const fs=require("fs");
module.exports=(app,path)=>{
app.get("/reloader.js/reloader.js",(req,res)=>{
	res.sendFile(__dirname+"/reloader.browser.js");
});
const http = require('http').createServer(app);
const io = require('socket.io')(http);
io.on('connection', function(socket){
	socket.emit("welcome","true");
});
fs.watch(path,event=>{
io.emit("reload", 1);
});
return http;
};