var express=require("express");
var bodyparser=require("body-parser");
var _=require('underscore');
var db = require('./db.js')
var app=express();
var PORT=process.env.PORT || 3000;

app.use(bodyparser.json());

// var todos= [{id:1,	Name:'Pankaj Sharma',	Salary:4545},
// 			{ id:101, 	Name:'Kamlesh Yadav',	Salary:456456},
// 			{ id:103, 	Name:'Sunil Yadav',	Salary:4334},
// 			{ id:104, 	Name:'Pranjal sharma',	Salary:34434}
// 		  ];

app.get('/todo/:id',
	function(req,res){
		var todoid=parseInt(req.params.id,10);
		var matched;
		todos.forEach(function(todo){
 		if(todoid===todo.id){
 		matched=todo;
 							}
		});
		if(matched)
		{
     	 res.json(matched);
		}
		else
		{
    	 res.status(404).send();
		}
	});
// app.get('/todo',function(req,res){
// 	res.json(todos);
// });

app.post('/user',function(req,res){
	var body=_.pick(req.body,'email','password');
	db.user.create(body).then(function(user){
		res.json(user.toJSON);
	},function(e){		
res.status(400).json(e);
	})
	res.json(body);
})

app.post('/todo',function(req,res){
	console.log(req.body);
	var body= _.pick(req.body,'description','completed');
	db.todo.create(body).then(function(todo){
		res.json(todo.toJSON());
	},function(e){
		res.status(400).json(e);
	});
	console.log("description:  "+body.description);
	res.json(body);
});

 db.sequelize.sync().then( function(){
 	app.listen(PORT,function(){
	console.log("Express listening on port"+PORT);
})});
 
	




