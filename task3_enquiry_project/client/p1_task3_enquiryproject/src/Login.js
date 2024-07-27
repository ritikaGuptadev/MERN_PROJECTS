import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import app from "./Firebase";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import adminlogo from "./images/adminlogo.png";

function Login()
{
	const nav = useNavigate();
	const [ans,setAns] = useState("");
	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un != null)
		{
			nav("/");
		}
	},[]);
	const [email,setEmail] = useState("");
	const [p,setP] = useState("");
	
	const hEmail = (event) => {setEmail(event.target.value);}
	const hP = (event) => {setP(event.target.value);}
	
	const save = (event) => {
		event.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth,email,p)
		.then(res =>{
			nav("/");
			localStorage.setItem("un",email);
		})
		.catch(err => setAns("Issue "+err));
	}

	return(
	<>
	<center>
	<NavBar/>
	<div className="container">
	<form onSubmit={save}>
	<div className="header">
	<img src={adminlogo}/>
	<h1>Admin Login</h1>
	</div>
	<div class="e">
	<label>Email</label>
	<input type="email" placeholder="Enter Email" style={{"border-radius":"10px", "width":"70%"}}
	onChange={hEmail} value={email} required/>
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
	<h2 style={{"color":"white"}}>{ans}</h2>
	</center>
	</>
	);
}
export default Login;