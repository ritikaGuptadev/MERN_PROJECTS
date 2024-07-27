import {useState,useRef,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import app from "./Firebase";
import Navbar from "./Navbar";
import {getAuth, sendPasswordResetEmail} from "firebase/auth";

export default function ForgotPwd()
{
	const [email,setEmail] = useState("");
	const rEmail = useRef();
	const nav = useNavigate();

	const hEmail = (event) => {setEmail(event.target.value);}

	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un != null)
		{
			nav("/");
		}
	},[]);
	const reset = (event) => {
		event.preventDefault();
		let auth = getAuth();
		sendPasswordResetEmail(auth,email)
		.then(res => {
			alert("Check Admin Gmail")
			nav("/login");
		})
		.catch(err => alert("Issue "+err));
	}
	return(
	<>
	<center>
	<Navbar/>
	<div className="container">
	<form onSubmit={reset}>
	<div className="headerforgot">
	<h1>Forgot Password</h1>
	</div>
	<div class="e">
	<label>Registered Email</label>
		<input type="email" placeholder="Enter Email" style={{"border-radius":"10px", "width":"70%"}}
		onChange={hEmail} value={email} ref={rEmail} required/>
	</div>
	<br/><br/>
		<input type="submit" class="btn" value="Reset"/>
	</form>
	</div>
	</center>
	</>
	);
}