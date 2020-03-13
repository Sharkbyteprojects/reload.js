const app = require('express')();
const fs = require('fs');
app.get('/', function(req, res){
  res.sendFile(__dirname + '/test.html');
});
let iend=true;
app.get("/changefile",(req,res)=>{
	if(iend){
	setTimeout(s=>{
		fs.writeFile(__dirname + '/test.html', `<!DOCTYPE html>
<html>
<head>
	<title>TestPage 2</title>
</head>
<body><h1>PAGE V 2</h1>
<h1>This page will reload on Change (NUMBER ON TITLE)</h1>
<p><a href="/changefile">Change it!</a> and wait 2 Seconds</p>
<script type="text/javascript" src="/reloader.js/reloader.js"></script>
</body>
</html>`, function(err) {

		}); 
	},2000);
}else{setTimeout(s=>{
		fs.writeFile(__dirname + '/test.html', `<!DOCTYPE html>
<html>
<head>
	<title>TestPage 1</title>
</head>
<body><h1>PAGE V 1</h1>
<h1>This page will reload on Change (NUMBER ON TITLE)</h1>
<p><a href="/changefile">Change it!</a> and wait 2 Seconds</p>
<script type="text/javascript" src="/reloader.js/reloader.js"></script>
</body>
</html>`, function(err) {

		}); 
	},2000);}iend=!iend;
	res.redirect("/");
});
const io = require('./reloader.js')(app,[__dirname]);
io.listen(8080,()=>{console.log("Server listen on 8080");})