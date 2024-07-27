import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function Logout()
{
	const nav = useNavigate();
	useEffect( () => {
		localStorage.clear();
		nav("/login");
	},[]);
	return(
	<>
	</>
	);
}