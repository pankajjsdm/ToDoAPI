var Sequelize=require('sequelize');
var sequelize=new Sequelize(undefined,undefined,undefined,{
   'dialect':'sqlite',
   'storage':__dirname+ '/basic-sqlite-databae.sqlite'
});

var todo = sequelize.define('todo',{
	description:{
		type: Sequelize.STRING,
		alowNull:true,
		len:[1,250]
	},
	completed:{
		type:Sequelize.BOOLEAN,
		defaultValue:false
	}
})

sequelize.sync().then(function(){
      console.log('Everything is synced');
      todo.create({
      	description:"Sharma Pankaj Noida",      	
      }).then(function(todo){
      	console.log("Data Saved");
      	console.log(todo);
      }).catch(function(e){
      	console.log(e);
      }).then(function(){
      	return todo.findById(2);
      }).then(function(TODO){
      	console.log(TODO.toJSON());
      })
});