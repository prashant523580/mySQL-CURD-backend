var mysql = require("mysql");
const {Sequelize} =require("sequelize");
const db = new  Sequelize(process.env.DB,process.env.USER,process.env.PASS,{
	host:process.env.HOST,
	dialect: "mysql"
})



//const conn = mysql.createConnection({
//	host:"localhost",
//	user:"root",
//	password:"mysql-root",
//	database:"freeSource"
//});

//conn.connect(function(err){

//if(err) throw err ;
//console.log("connected")
//})
module.exports =db;
