const express = require("express");
const env = require("dotenv");
env.config();
const cors = require("cors");
const bodyParser =require("body-parser");
const cookie =  require("cookie-parser");
const db = require("./db/dbcon");
const productRoutes = require("./routes/product.route");
const app = express();
const PORT = process.env.PORT;

try{
	(async function (){
  await db.authenticate();
	})()
 console.log("database connected")
}catch(err){
 console.log("faild to connect.")
}
app.use(cors());

app.get("/",(req,res) => {
	res.status(200).json({
		data:"hello world"
	})
})
app.use("/product", productRoutes)
app.listen(PORT,() =>{
	console.log(`listening to port ${PORT}`);
})
