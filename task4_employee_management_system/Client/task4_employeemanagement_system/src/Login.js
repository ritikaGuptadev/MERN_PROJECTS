import {useState,useEffect,useRef} from "react";
import app from "./Firebase";
import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import Navbar from "./Navbar";

export default function Login()
{
	const [email,setEmail] = useState("");
	const [p,setP] = useState("");
	
	const rEmail = useRef();
	const nav = useNavigate();

	const hEmail = (event) => {setEmail(event.target.value);}
	const hP = (event) => {setP(event.target.value);}

	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un != null)
		{
			nav("/");
		}
	},[]);

	const save = (event) => {
		event.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth,email,p)
		.then(res => {
			alert("Logged In Successfullyy!!")
			nav("/");
			localStorage.setItem("un",email);
		})
		.catch(err => alert("Issue "+err));
	}
	return(
	<>
	<center>
	<Navbar/>
	<div className="container">
	<form onSubmit={save}>
	<div className="header">
	<h1>Admin Login</h1>
	
	</div>
	<div class="e">
	<label>Email</label>
		<input type="email" placeholder="Enter Email" style={{"border-radius":"10px", "width":"70%"}}
		onChange={hEmail} value={email} ref={rEmail} required/>
	</div>
	<div class="p">
	<label>Password</label>
		<input type="password" placeholder="Enter Password" style={{"border-radius":"10px", "width":"70%"}}
		onChange={hP} value={p} required/>
	</div>
	<br/><br/>
	<input type="submit" class="btn" value="Login"/>
	</form>
	</div>
	
	</center>
	</>
	);
}