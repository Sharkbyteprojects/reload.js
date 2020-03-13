# RELOAD.JS
![npm](https://img.shields.io/npm/dt/reloadsh.js?label=NPM%20DOWNLOADS)
## Argumentd
- 1.APP from Express [OBJECT]
- 2.Folders of Files (ONCHANGE, RELOAD) [ARRAY]

## Return
It return an NORMAL http-module http server
use it with '.listen(80, ()=>{console.log("HEY, ONLINE")})'

## Examples
```const reload = require('reloadsh.js')(app,[__dirname+"/myfiles"]);```

### FULL EXAMPLE
```
const app = require('express')();

app.get('/', function(req, res){

  res.sendFile(__dirname + '/files/index.html');

});

const reload = require('reloadsh.js')(app,[__dirname+"/files"]);

reload.listen(8080,()=>{

	console.log("Server listen on 8080");

});
```

AT INDEX.html you must add in the HEAD ```<script type="text/javascript" src="/reloader.js/reloader.js"></script>```