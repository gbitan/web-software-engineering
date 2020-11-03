let http = require("http");
let path = require("path");
//express server

let express = require('express');
const { send } = require("process");
let app = express();
app.use(express.static(path.join(__dirname,'public')));//statment path

app.get('/page',function(req,res){ //catch get 
	
	console.log(req.prtocol);
	console.log(req.ip);
	console.log(req.query);
	let user=req.query.user;
	let password=req.query.password;
	if(user==="gad" && password==="1234")
	{
	res.send("legal");
	}
	if(user==="gad" && password!="1234")
	{
		res.send("ilegal");
	}
	else
	res.send("legal");
	if(user==="moshe")
	{
		res.send("ilegal");
	}
	res.writeHead( 200, { 'Set-Cookie' : 'mycookie=test',
	'Content-Type' : 'text/plain' });


});

app.listen(8082,function(){
	console.log('express server running at port 8082');

});


