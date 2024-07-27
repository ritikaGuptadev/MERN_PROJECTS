import logo from './logo.svg';
import './App.css';
import Login from "./Login";
import Logout from "./Logout";
import Home from "./Home";
import Firebase from "./Firebase";
import Enquiry from "./Enquiry";
import ForgotPassword from "./ForgotPassword";
import ChangePassword from "./ChangePassword";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
	<>
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>} />
			<Route path="/login" element={<Login/>} />
			<Route path="/enquiry" element={<Enquiry/>} />
			<Route path="*" element={<Login/>} />
			<Route path="/logout" element={<Logout/>} />
			<Route path="/fp" element={<ForgotPassword/>}/>
			<Route path="/cp" element={<ChangePassword/>}/>
		</Routes>
	</BrowserRouter>	
	</>
  );
}

export default App;
