const fs=require("fs");
const fjs=fs.readFileSync(__dirname+"/reloader.browser.js");
module.exports=(app,path)=>{

const http = require('http').createServer(app);
const io = require('socket.io')(http);
http.addListener("request",(req,res)=>{
	if(req.url=="/reloader.js/reloader.js"){
	res.header("Content-Type", "application/javascript");
	res.end(fjs);}
});
io.on('connection', function(socket){
	socket.emit("welcome","true");
});
path.forEach(s=>{
fs.watch(s,event=>{
io.emit("reload", 1);
});});
return http;
};