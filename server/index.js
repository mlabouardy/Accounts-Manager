var accounts=[];
for(var i=0;i<=10;i++){
		accounts.push({
			id:i,
			name:"Bla bla",
			age:18+i
		});
	}

var express=require('express');
var bodyParser = require('body-parser');

var app = express();               

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.static('app'));
             
app.get('/', function(req, res) {
    res.send({ message: 'TD2 is working !!!' });   
});

app.get('/accounts',function(req,res){
   res.send(accounts);
});



app.get('/accounts/:id',function(req,res){
   var id=req.params.id; 
   if(id>accounts.length)
	res.send({error:"Account not found"});
   else
   	res.send(accounts[id]);
});

app.listen(3000,function(){
  console.log('Yuupi');
});

