var express=require("express");
var bodyparser=require("body-parser");
var app=express();

var PORT=process.env.PORT || 8000;

app.use(bodyparser.json());

var todos= [{id:1,	Name:'Pankaj Sharma',	Salary:4545},
			{ id:101, 	Name:'Kamlesh Yadav',	Salary:456456},
			{ id:103, 	Name:'Sunil Yadav',	Salary:4334},
			{ id:104, 	Name:'Pranjal sharma',	Salary:34434}
		  ];

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
app.get('/todo',function(req,res){
	res.json(todos);
});

app.post('/todo',function(req,res){
	var body=req.body;
	console.log("description:  "+body.description);
	res.json(body);
})


app.listen(PORT,function(){
	console.log("Express listening on port"+PORT);
});

