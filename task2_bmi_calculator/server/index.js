const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/find",(req,res) => {
	let ht = req.query.ht;
	let wt = req.query.wt;
	let h = ht / 100;
	let r =wt / (h * h);
	let msg1 = "Your BMI is "+r.toFixed(2);
	let msg2 = "";
	let msg3="";
	let msg4="";
	if(r < 18.5)
	{
		msg2 = "Underweight";
		msg3 = "Time to grab a bite!";
		msg4="By maintaining a healthy weight, you lower your risk of developing serious health problems.";
	}
	else if(r < 25 && r >=18.5)
	{
		msg2 = "Normal Weight";
		msg3 = "Great shape";
		msg4 = "By maintaining a healthy weight, you lower your risk of developing serious health problems.";
	}
	else if(r < 30 && r >= 25)
	{
		msg2 = "Overweight";
		msg3 = "Time to run!";
		msg4 = "By maintaining a healthy weight, you lower your risk of developing serious health problems.";
	}
	else if(r < 36 && r >= 30)
	{
		msg2 = "Obese";
		msg3 = "Time to run!";
		msg4 = "By maintaining a healthy weight, you lower your risk of developing serious health problems.";
	}
	else
	{
		msg2 = "Morbid Obesity";
		msg3 = "Time to run!";
		msg4 = "By maintaining a healthy weight, you lower your risk of developing serious health problems.";
	}
	res.json({"msg1":msg1, "msg2": msg2, "msg3":msg3, "msg4":msg4});
})

app.listen(9000, () => {console.log("Server Ready @9000");});