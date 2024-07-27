import { useState,useRef } from "react";
import axios from "axios";

export default function AreaConverter()
{
	const rSqf = useRef("");
	const rAcre = useRef("");
	
	const [sqf,setSqf] = useState("");
	const [acre,setAcre] = useState("");

	const [ans1,setAns1] = useState("");
	const [ans2,setAns2] = useState("");

	const hSqf = (event) => {setSqf(event.target.value);}
	const hAcre = (event) => {setAcre(event.target.value);}

	const check1 = (event) => {
		event.preventDefault();

		const action = document.activeElement.value;

		const minSquareFeet = 0;
		const maxSquareFeet = 1000000;

		if(action == "Acre")
		{
			if(sqf == "")
			{
			alert("Square Feet Field is Empty!!");
			setSqf("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < 0)
			{
			alert("Negative Square Feet Not Allowed!!");
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < minSquareFeet || sqf > maxSquareFeet)
			{
			alert("Square Feet must be a number between "+minSquareFeet+ " - "+maxSquareFeet);
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}

			let url = "https://areaconverter.onrender.com/find1";
			let data = {params : {number: sqf}};
			axios.get(url,data)
			.then(res => setAns1(res.data.msg))
			.catch(err => setAns1("Issue "+err));	
		}
		else if(action == "Square Kilometer")
		{
			if(sqf == "")
			{
			alert("Square Feet Field is Empty!!");
			setSqf("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < 0)
			{
			alert("Negative Square Feet Not Allowed!!");
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < minSquareFeet || sqf > maxSquareFeet)
			{
			alert("Square Feet must be a number between "+minSquareFeet+ " - "+maxSquareFeet);
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}

			let url = "https://areaconverter.onrender.com/find2";
			let data = {params : {number: sqf}};
			axios.get(url,data)
			.then(res => setAns1(res.data.msg))
			.catch(err => setAns1("Issue "+err));	
		}
		else if(action == "Square Meter")
		{
			if(sqf == "")
			{
			alert("Square Feet Field is Empty!!");
			setSqf("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < 0)
			{
			alert("Negative Square Feet Not Allowed!!");
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < minSquareFeet || sqf > maxSquareFeet)
			{
			alert("Square Feet must be a number between "+minSquareFeet+ " - "+maxSquareFeet);
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}

			let url = "https://areaconverter.onrender.com/find3";
			let data = {params : {number: sqf}};
			axios.get(url,data)
			.then(res => setAns1(res.data.msg))
			.catch(err => setAns1("Issue "+err));	
		}
		else if(action == "Square Mile")
		{
			if(sqf == "")
			{
			alert("Square Feet Field is Empty!!");
			setSqf("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < 0)
			{
			alert("Negative Square Feet Not Allowed!!");
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < minSquareFeet || sqf > maxSquareFeet)
			{
			alert("Square Feet must be a number between "+minSquareFeet+ " - "+maxSquareFeet);
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}

			let url = "https://areaconverter.onrender.com/find4";
			let data = {params : {number: sqf}};
			axios.get(url,data)
			.then(res => setAns1(res.data.msg))
			.catch(err => setAns1("Issue "+err));	
		}
		else if(action == "Square Yard")
		{
			if(sqf == "")
			{
			alert("Square Feet Field is Empty!!");
			setSqf("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < 0)
			{
			alert("Negative Square Feet Not Allowed!!");
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < minSquareFeet || sqf > maxSquareFeet)
			{
			alert("Square Feet must be a number between "+minSquareFeet+ " - "+maxSquareFeet);
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}

			let url = "https://areaconverter.onrender.com/find5";
			let data = {params : {number: sqf}};
			axios.get(url,data)
			.then(res => setAns1(res.data.msg))
			.catch(err => setAns1("Issue "+err));	
		}
		else if(action == "Square Inch")
		{
			if(sqf == "")
			{
			alert("Square Feet Field is Empty!!");
			setSqf("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < 0)
			{
			alert("Negative Square Feet Not Allowed!!");
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < minSquareFeet || sqf > maxSquareFeet)
			{
			alert("Square Feet must be a number between "+minSquareFeet+ " - "+maxSquareFeet);
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}

			let url = "https://areaconverter.onrender.com/find6";
			let data = {params : {number: sqf}};
			axios.get(url,data)
			.then(res => setAns1(res.data.msg))
			.catch(err => setAns1("Issue "+err));	
		}
		else if(action == "Hectare")
		{
			if(sqf == "")
			{
			alert("Square Feet Field is Empty!!");
			setSqf("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < 0)
			{
			alert("Negative Square Feet Not Allowed!!");
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}
			else if(sqf < minSquareFeet || sqf > maxSquareFeet)
			{
			alert("Square Feet must be a number between "+minSquareFeet+ " - "+maxSquareFeet);
			setSqf("");
			setAns1("");
			rSqf.current.focus();
			return;
			}

			let url = "https://areaconverter.onrender.com/find7";
			let data = {params : {number: sqf}};
			axios.get(url,data)
			.then(res => setAns1(res.data.msg))
			.catch(err => setAns1("Issue "+err));	
		}
		
	}
	const check2 = (event) => {
		event.preventDefault();

		const action = document.activeElement.value;
		const minAcre = 0;
		const maxAcre = 100;

		if(action == "Square Feet")
		{
			if(acre == "")
			{
				alert("Acre Field is Empty!!");
				setAcre("");
				rAcre.current.focus();
				return;
			}
			else if(acre < 0)
			{
				alert("Negative Acre Not Allowed!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}	
			else if(acre < minAcre || acre > maxAcre)
			{
				alert("Acre must be a number between "+minAcre+ " - "+maxAcre);
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}

			let url = "https://areaconverter.onrender.com/find8";
			let data = {params : {number: acre}};
			axios.get(url,data)
			.then(res => setAns2(res.data.msg))
			.catch(err => setAns2("Issue "+err));
		}
		else if(action == "Square Kilometer")
		{
			if(acre == "")
			{
				alert("Acre Field is Empty!!");
				setAcre("");
				rAcre.current.focus();
				return;
			}
			else if(acre < 0)
			{
				alert("Negative Acre Not Allowed!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}	
			else if(acre < minAcre || acre > maxAcre)
			{
				alert("Acre must be a number between "+minAcre+ " - "+maxAcre);
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}

			let url = "https://areaconverter.onrender.com/find9";
			let data = {params : {number: acre}};
			axios.get(url,data)
			.then(res => setAns2(res.data.msg))
			.catch(err => setAns2("Issue "+err));
		}
		else if(action == "Square Meter")
		{
			if(acre == "")
			{
				alert("Acre Field is Empty!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}
			else if(acre < 0)
			{
				alert("Negative Acre Not Allowed!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}	
			else if(acre < minAcre || acre > maxAcre)
			{
				alert("Acre must be a number between "+minAcre+ " - "+maxAcre);
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}

			let url = "https://areaconverter.onrender.com/find10";
			let data = {params : {number: acre}};
			axios.get(url,data)
			.then(res => setAns2(res.data.msg))
			.catch(err => setAns2("Issue "+err));
		}
		else if(action == "Square Mile")
		{
			if(acre == "")
			{
				alert("Acre Field is Empty!!");
				setAcre("");
				rAcre.current.focus();
				return;
			}
			else if(acre < 0)
			{
				alert("Negative Acre Not Allowed!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}	
			else if(acre < minAcre || acre > maxAcre)
			{
				alert("Acre must be a number between "+minAcre+ " - "+maxAcre);
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}

			let url = "https://areaconverter.onrender.com/find11";
			let data = {params : {number: acre}};
			axios.get(url,data)
			.then(res => setAns2(res.data.msg))
			.catch(err => setAns2("Issue "+err));
		}
		else if(action == "Square Yard")
		{
			if(acre == "")
			{
				alert("Acre Field is Empty!!");
				setAcre("");
				rAcre.current.focus();
				return;
			}
			else if(acre < 0)
			{
				alert("Negative Acre Not Allowed!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}	
			else if(acre < minAcre || acre > maxAcre)
			{
				alert("Acre must be a number between "+minAcre+ " - "+maxAcre);
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}

			let url = "https://areaconverter.onrender.com/find12";
			let data = {params : {number: acre}};
			axios.get(url,data)
			.then(res => setAns2(res.data.msg))
			.catch(err => setAns2("Issue "+err));
		}
		else if(action == "Square Inch")
		{
			if(acre == "")
			{
				alert("Acre Field is Empty!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}
			else if(acre < 0)
			{
				alert("Negative Acre Not Allowed!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}	
			else if(acre < minAcre || acre > maxAcre)
			{
				alert("Acre must be a number between "+minAcre+ " - "+maxAcre);
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}

			let url = "https://areaconverter.onrender.com/find13";
			let data = {params : {number: acre}};
			axios.get(url,data)
			.then(res => setAns2(res.data.msg))
			.catch(err => setAns2("Issue "+err));
		}
		else if(action == "Hectare")
		{
			if(acre == "")
			{
				alert("Acre Field is Empty!!");
				setAcre("");
				rAcre.current.focus();
				return;
			}
			else if(acre < 0)
			{
				alert("Negative Acre Not Allowed!!");
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}	
			else if(acre < minAcre || acre > maxAcre)
			{
				alert("Acre must be a number between "+minAcre+ " - "+maxAcre);
				setAcre("");
				setAns2("");
				rAcre.current.focus();
				return;
			}

			let url = "https://areaconverter.onrender.com/find14";
			let data = {params : {number: acre}};
			axios.get(url,data)
			.then(res => setAns2(res.data.msg))
			.catch(err => setAns2("Issue "+err));
		}
	}
	return(
	<>
	<center>
		<h1>Area Converter Web App</h1>
		<form onSubmit={check1}>
		<input type="number" step="any" placeholder="Enter Square Feet" style={{"border-radius":"10px", "width":"40%"}}
		onChange={hSqf} value={sqf} ref={rSqf}/>
		<br/><br/>
		<input type="submit" value="Acre" className="btn"/>
		<input type="submit" value="Square Kilometer" className="btn"/>
		<input type="submit" value="Square Meter" className="btn"/>
		<input type="submit" value="Square Mile" className="btn"/>
		<input type="submit" value="Square Yard" className="btn"/>
		<input type="submit" value="Square Inch" className="btn"/>
		<input type="submit" value="Hectare" className="btn"/>
		<br/>
		<h2>{ans1}</h2>
		</form>
		
		<form onSubmit={check2}>
		<input type="number" step="any" placeholder="Enter Acre" style={{"border-radius":"10px", "width":"40%"}}
		onChange={hAcre} value={acre} ref={rAcre}/>
		<br/><br/>
		<input type="submit" value="Square Feet" className="btn"/>
		<input type="submit" value="Square Kilometer" className="btn"/>
		<input type="submit" value="Square Meter" className="btn"/>
		<input type="submit" value="Square Mile" className="btn"/>
		<input type="submit" value="Square Yard" className="btn"/>
		<input type="submit" value="Square Inch" className="btn"/>
		<input type="submit" value="Hectare" className="btn"/>
		<br/>
		<h2>{ans2}</h2>
		</form>
	</center>
	</>
	);
}