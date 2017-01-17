module.exports=function(sequelize,DataTypes){
return sequelize.define('user',{
	   email:{
		type: DataTypes.STRING,
		alowNull:false,
		unique:true,
		validate: {
			isEmail: true
		}
	},
	password:{
		type:DataTypes.STRING,
		alowNull:false,
		validate:{
		len:[]
	}
}
});
};