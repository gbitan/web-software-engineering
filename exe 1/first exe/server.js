let http = require("http");
let path = require("path");
//express server

let express = require('express');
let app = express();
app.use(express.static(path.join(__dirname,'public')));//statment path

app.get('/page',function(req,res){ //catch get 
	

	
    
	console.log(req.prtocol);
	console.log(req.ip);
	console.log(req.query);
	
	let first = req.query.first;
	let last = req.query.last;
	let isStusent ="";
	if(req.query.isStudent == null){
		isStudent=req.query.isStudent;
	}
	if(isStudent){
	isStudent="OFF";         }
	
	res.send("first:"+ first + "last : " + "isStudent :" + isStudent);
    
});




app.listen(8081,function(){
	console.log('express server running at port 8081');

});

