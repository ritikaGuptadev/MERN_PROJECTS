const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const {MongoClient} = require("mongodb");

app.post("/save",(req,res) => {
	const url = "mongodb://0.0.0.0:27017";
	const client = new MongoClient(url);
	const db = client.db("task3enquiry13jan24");
	const coll = db.collection("enquiry");
	const record = {"_id": req.body.phone, "name": req.body.name, "address":req.body.address, "lang":req.body.lang};
	coll.insertOne(record)
	.then(result => res.send(result))
	.catch(error => res.send(error));
})

app.get("/read",(req,res) => {
	const url = "mongodb://0.0.0.0:27017";
	const client = new MongoClient(url);
	const db = client.db("task3enquiry13jan24");
	const coll = db.collection("enquiry");
	coll.find({}).toArray()
	.then(result => res.send(result))
	.catch(error => res.send(error));
})
app.delete("/remove",(req,res) => {
	const url = "mongodb://0.0.0.0:27017";
	const client = new MongoClient(url);
	const db = client.db("task3enquiry13jan24");
	const coll = db.collection("enquiry");
	const data = {"_id": req.body.phone};
	coll.deleteOne(data)
	.then(result => res.send(result))
	.catch(error => res.send(error));
})

app.listen(9000,() => {console.log("Server Ready @9000");});