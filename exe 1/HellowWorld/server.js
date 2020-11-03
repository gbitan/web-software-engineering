var http = require('http');
var express = require('express');
var current = new Date();
app = express();
app.get('/',function(req,res){
  
     res.writeHead( 200, "ok", { 'Content-Type': 'text/html',
                                'Expires': current.toGMTString(), 
                                'X-Powered-By': 'NODE',
                                'Content-Length': 14990,
                                'Server': 'MYNODE.JS',
                                'Cache-Control': 'no-cache,no-store', 
                            });                           
    res.write('Hello World\n');
    
   
    
});

app.listen(3000,function(){
    console.log('express server running at port 3000');
});
