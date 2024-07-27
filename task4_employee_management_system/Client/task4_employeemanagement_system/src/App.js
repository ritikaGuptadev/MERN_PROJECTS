import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Home from "./Home";
import Logout from "./Logout";
import ForgotPwd from "./ForgotPwd";
import ChangePwd from "./ChangePwd";
import Update from "./Update";
import Chart from "./Chart";
import Add from "./Add";
import Firebase from "./Firebase";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
	<>
	<BrowserRouter>
	<Routes>
		<Route path="/" element={<Home/>}/>
		<Route path="/login" element={<Login/>}/>
		<Route path="/forgotpwd" element={<ForgotPwd/>}/>
		<Route path="/add" element={<Add/>}/>
		<Route path="/update" element={<Update/>}/>
		<Route path="/chart" element={<Chart/>}/>
		<Route path="/changepwd" element={<ChangePwd/>}/>
		<Route path="/logout" element={<Logout/>}/>
		<Route path="*" element={<Login/>}/>
	</Routes>
	</BrowserRouter>
	</>
  );
}

export default App;
