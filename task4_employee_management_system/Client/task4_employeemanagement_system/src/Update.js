import {useState,useRef,useEffect} from "react";
import Navbar from "./Navbar";
import {useNavigate,useLocation} from "react-router-dom";
import axios from "axios";

export default function Update()
{
	const [id,setId] = useState("");
	const [name,setName] = useState("");
	const [salary,setSalary] = useState("");

	const hId = (event) => {setId(event.target.value);}
	const hName = (event) => {setName(event.target.value);}
	const hSalary = (event) => {setSalary(event.target.value);}

	const nav = useNavigate();
	const loc = useLocation();

	const rId = useRef();
	const rName = useRef();
	const rSalary = useRef();

	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un == null)
		{
			nav("/login");
		}
	},[]);

	useEffect( () => {
		setId(loc.state.i);
		setName(loc.state.n);
		setSalary(loc.state.s);
	},[]);

	const change = (event) => {
		event.preventDefault();
		let url = "https://employeemanagementsystem-t9y2.onrender.com/modify";
		let data = {id, name, salary};
		axios.put(url,data)
		.then(res => {
			alert("Employee Record Updated Successfully");
			nav("/");
		})
		.catch(err => alert("Issue "+err));
	}
	return(
	<>
	<center>
	<Navbar/>
	<div className="container">
	
	<form onSubmit={change}>
	<div className="header">
	<h1>Update Employee Details</h1>
	</div>

	<div class="e">
	<label>Employee ID</label>
	<input type="number" placeholder="Enter Employee Id" disabled required style={{"border-radius":"10px", "width":"70%"}}
	onChange={hId} value={id} ref={rId}/>
	</div>
	
	<div class="p">
	<label>Employee Name</label>
	<input type="name" placeholder="Enter Employee Name" required style={{"border-radius":"10px", "width":"70%"}}
	onChange={hName} value={name} ref={rName}/>
	</div>

	<div class="p">
	<label>Employee Salary</label>
	<input type="number" step="any" placeholder="Enter Employee Salary" required style={{"border-radius":"10px", "width":"70%"}}
	onChange={hSalary} value={salary} ref={rSalary}/>
	</div>
	<br/><br/>
	<input type="submit" class="btn" value="Update"/>
	</form>
	</div>
	</center>
	</>
	);
}