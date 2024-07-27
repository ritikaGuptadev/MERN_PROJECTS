import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import app from "./Firebase";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from "react-router-dom";

function ForgotPassword()
{	
	const nav = useNavigate();
	useEffect ( () => {
		let un = localStorage.getItem("un");
		if(un != null)
			nav("/");
	},[]);
	const [email,setEmail] = useState("");
	const [ans,setAns] = useState("");

	const hEmail = (event) => {setEmail(event.target.value);}

	const save = (event) => {
		event.preventDefault();
		const auth = getAuth();
		sendPasswordResetEmail(auth,email)
		.then(res => {
			nav("/login");
		})
		.catch(err => setAns("Issue "+err));
	}
	return(
	<>
	<center>
	<NavBar/>
	<div className="container">
	<form onSubmit={save}>
	<div className="headerforgot">
	<h1>Forgot Password</h1>
	</div>
	<div class="e">
	<label>Registered Email</label>
	<input type="email" placeholder="Enter Registered Email" style={{"border-radius":"10px", "width":"70%"}}
	onChange={hEmail} value={email}/>
	</div>
	<br/><br/>
	<input type="submit" class="btn" value="Reset"/>
	</form>
	</div>
	<h2>{ans}</h2>
	</center>
	</>
	);
}
export default ForgotPassword;