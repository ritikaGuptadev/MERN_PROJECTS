import {Link} from "react-router-dom";

export default function Navbar()
{
	const un = localStorage.getItem("un");
	return(
	<>
	<center>
	<div className="nav">
		{(un == null) && (<Link to="/login">Login</Link>)}
		{(un == null) && (<Link to="forgotpwd">Forgot Password</Link>)}
		{(un != null) && (<Link to="/">View Employee</Link>)}
		{(un != null) && (<Link to="/add">Add Employee</Link>)}
		{(un != null) && (<Link to="/chart">Employee Chart</Link>)}
		{(un != null) && (<Link to="/changepwd">Change Password</Link>)}
		{(un != null) && (<Link to="/logout">Logout</Link>)}
	</div>
	</center>
	</>
	);
}