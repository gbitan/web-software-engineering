let http = require("http");
let path = require("path");
//express server

let express = require('express');
let app = express();
app.use(express.static(path.join(__dirname,'public')));//statment path

app.set('view engine','ejs');

app.get('/flower1',function(req,res){ //catch get 
	res.sendFile("c:/לימודים/סמסטר א תשפא/הנסדת תוכנה לאינטרנט/flowers/public/flower1.html");
}); 
app.get('/flower2',function(req,res){ //catch get 
	res.sendFile("c:/לימודים/סמסטר א תשפא/הנסדת תוכנה לאינטרנט/flowers/public/flower2.html");
});
app.get('/flower3',function(req,res){ //catch get 
	res.sendFile("c:/לימודים/סמסטר א תשפא/הנסדת תוכנה לאינטרנט/flowers/public/flower3.html");
}); 
app.get('/flower4',function(req,res){ //catch get 
	res.sendFile("c:/לימודים/סמסטר א תשפא/הנסדת תוכנה לאינטרנט/flowers/public/flower4.html");
}); 
app.get('/flower5',function(req,res){ //catch get 
	res.sendFile("c:/לימודים/סמסטר א תשפא/הנסדת תוכנה לאינטרנט/flowers/public/flower5.html");
});  



app.listen(8080,function () {
	console.log("start listen port 8080");
})