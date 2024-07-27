import {useState,useRef,useEffect} from "react";
import Navbar from "./Navbar";
import {getAuth,updatePassword,onAuthStateChanged} from "firebase/auth";
import app from "./Firebase";
import {useNavigate} from "react-router-dom";

export default function ChangePwd()
{
	const [p1,setP1] = useState("");
	const [p2,setP2] = useState("");

	const rP1 = useRef();

	const hP1 = (event) => {setP1(event.target.value);}
	const hP2 = (event) => {setP2(event.target.value);}

	const nav = useNavigate();

	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un == null)
		{
			nav("/login");
		}
	},[]);

	const change = (event) => {
		event.preventDefault();
		
		if(p1 == p2)
		{
			const auth = getAuth();
			onAuthStateChanged(auth, (user) => {
				updatePassword(user,p1)
				.then(res => {
					localStorage.clear();
					nav("/login");
				})
				.catch(err => alert("Issue "+err));
			})	
		}
		else{
			alert("Password did not match!!!");
		}
	}
	return(
	<>
	<center>
	<Navbar/>
	<div className="container">
	<form onSubmit={change}>
	<div className="headerChange">
	<h1>Change Password</h1>
	</div>
	<div class="p">
	<label>New Password</label>
	<input type="password" placeholder="Enter New Password" style={{"border-radius":"10px", "width":"90%","margin-left":"2%"}}
	onChange={hP1} value={p1} ref={rP1} required/>
	</div>
	<div class="p">
	<label>Confirm Password</label>
	<input type="password" placeholder="Enter Confirm Password" style={{"border-radius":"10px", "width":"90%","margin-left":"2%"}}
	 onChange={hP2} value={p2} required/>
	</div>
	<br/><br/>
	<input type="submit" class="btn" value="Change"/>
	</form>
	</div>
	</center>
	</>
	);
}