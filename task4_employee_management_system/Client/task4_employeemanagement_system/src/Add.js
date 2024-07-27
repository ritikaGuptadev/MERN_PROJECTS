import {useState,useRef} from "react";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Add()
{
	const [id,setId] = useState("");
	const [name,setName] = useState("");
	const [salary,setSalary] = useState("");

	const hId = (event) => {setId(event.target.value);}
	const hName = (event) => {setName(event.target.value);}
	const hSalary = (event) => {setSalary(event.target.value);}

	const nav = useNavigate();

	const rId = useRef();
	const rName = useRef();
	const rSalary = useRef();

	const save = (event) => {
		event.preventDefault();
		const minid = 1;
		const maxid = 400;
		const minsal = 10000;
		
		if(id < minid || id > maxid) 
		{
			alert("Id should in range between "+minid+ " - "+maxid);
			setId("");
			rId.current.focus();
			return;
		}
		else if(id < 0)
		{
			alert("Nagative Id Not Allowed!!");
			setId("");
			rId.current.focus();
			return;
		}
		if(!name.match(/^[A-Za-z ]+$/))
		{
			alert("Only Alphabets are allowed!!");
			setName("");
			rName.current.focus();
			return;
		}
		else if(name.trim().length < 2)
		{
			alert("Name must have minimum two letters");
			setName("");
			rName.current.focus();
			return;
		}
		if(salary < minsal)
		{
			alert("Salary Must be more than "+minsal);
			setSalary("");
			rSalary.current.focus();
			return;
		}
		let url = "https://employeemanagementsystem-t9y2.onrender.com/save";
		let data = {id, name, salary};
		axios.post(url,data)
		.then(res => {
			if(res.data.insertedId == id)
			{
				alert("Employee Data Stored Successfully");
				setId("");
				setName("");
				setSalary("");
				rId.current.focus();
				return;
			}
			else{
				alert("Employee Data Already Exist!!");
				setId("");
				rId.current.focus();
				return;
			}	
		})
		.catch(err => alert("Issue "+err));
	}

	return(
	<>
	<center>
	<Navbar/>
	<div className="container">
	
	<form onSubmit={save}>
	<div className="headere">
	<h1>Add Employee</h1>
	</div>
	<div class="e">
		<label>ID</label>
		<input type="number" placeholder="Enter Id" required style={{"border-radius":"10px", "width":"80%","margin-left":"2%"}}
		onChange={hId} value={id} ref={rId}/>
	</div>
	<div class="p">	
		<label>Name</label>
		<input type="text" placeholder="Enter Name" required style={{"border-radius":"10px", "width":"80%","margin-left":"2%"}}
		onChange={hName} value={name} ref={rName}/>
	</div>
	<div class="p">	
		<label>Salary</label>
		<input type="number" step="any" placeholder="Enter Salary" required style={{"border-radius":"10px", "width":"80%","margin-left":"2%"}}
		onChange={hSalary} value={salary} ref={rSalary}/>
	</div>
	<br/><br/>
		<input type="submit" class="btn" value="Save"/>
	</form>
	</div>
	</center>
	</>
	);
}