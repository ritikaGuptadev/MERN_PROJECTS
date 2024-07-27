const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/find1",(req,res) => {
	let sqf = req.query.number;
	let n = parseFloat(sqf);
	let msg = n / 43560;
	res.json({"msg": "Acres = "+msg});
})

app.get("/find2",(req,res) => {
	let sqf = req.query.number;
	let n = parseFloat(sqf);
	let msg = n / 1.076e+7;
	res.json({"msg": "Square Kilometer = "+msg});
})

app.get("/find3",(req,res) => {
	let sqf = req.query.number;
	let n = parseFloat(sqf);
	let msg = n / 10.764;
	res.json({"msg": "Square Meter = "+msg});
})

app.get("/find4",(req,res) => {
	let sqf = req.query.number;
	let n = parseFloat(sqf);
	let msg = n / 2.788e+7;
	res.json({"msg": "Square Mile = "+msg});
})

app.get("/find5",(req,res) => {
	let sqf = req.query.number;
	let n = parseFloat(sqf);
	let msg = n / 9;
	res.json({"msg": "Square Yard = "+msg});
})

app.get("/find6",(req,res) => {
	let sqf = req.query.number;
	let n = parseFloat(sqf);
	let msg = n * 144;
	res.json({"msg": "Square Inch = "+msg});
})

app.get("/find7",(req,res) => {
	let sqf = req.query.number;
	let n = parseFloat(sqf);
	let msg = n / 107600;
	res.json({"msg": "Hectare = "+msg});
})

app.get("/find8",(req,res) => {
	let acre = req.query.number;
	let n = parseFloat(acre);
	let msg = n * 43560;
	res.json({"msg": "Square Feet = "+msg});
})

app.get("/find9",(req,res) => {
	let acre = req.query.number;
	let n = parseFloat(acre);
	let msg = n / 247.1;
	res.json({"msg": "Square Kilometer = "+msg});
})

app.get("/find10",(req,res) => {
	let acre = req.query.number;
	let n = parseFloat(acre);
	let msg = n * 4047;
	res.json({"msg": "Square Meter = "+msg});
})

app.get("/find11",(req,res) => {
	let acre = req.query.number;
	let n = parseFloat(acre);
	let msg = n / 640;
	res.json({"msg": "Square Mile = "+msg});
})

app.get("/find12",(req,res) => {
	let acre = req.query.number;
	let n = parseFloat(acre);
	let msg = n * 4840;
	res.json({"msg": "Square Yard = "+msg});
})

app.get("/find13",(req,res) => {
	let acre = req.query.number;
	let n = parseFloat(acre);
	let msg = n * 6.273e+6;
	res.json({"msg": "Square Inch = "+msg});
})

app.get("/find14",(req,res) => {
	let acre = req.query.number;
	let n = parseFloat(acre);
	let msg = n / 2.471;
	res.json({"msg": "Hectare = "+msg});
})

app.listen(9000, () => {console.log("Server Ready @9000");});