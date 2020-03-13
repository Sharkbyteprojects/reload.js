# RELOAD.JS
## Argumentd
- 1.APP from Express
- 2.Folder of Files (ONCHANGE, RELOAD)

## Return
It return an NORMAL http-muódule http server
use it with '.listen(80, ()=>{console.log("HEY, ONLINE")})'

## Examples
```const reload = require('reloadsh.js')(app,__dirname+"/myfiles");```

### FULL EXAMPLE
```const app = require('express')();```

```app.get('/', function(req, res){```

```  res.sendFile(__dirname + '/files/index.html');```

```});```

```const reload = require('reloadsh.js')(app,__dirname);```

```reload.listen(8080,()=>{console.log("Server listen on 8080");})```
