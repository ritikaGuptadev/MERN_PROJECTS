import {useState} from "react";
import axios from "axios";
import img_1 from "./images/img_1.jpg";
export default function BMI()
{
	const [male,setMale] = useState("");
	const [female,setFemale] = useState("");
	const [ht,setHt] = useState("");
	const [age,setAge] = useState("");
	const [wt,setWt] = useState("");
	const [ans1,setAns1] = useState("");
	const [ans2,setAns2] = useState("");
	const [ans3,setAns3] = useState("");
	const [ans4,setAns4] = useState("");

	const hMale = (event) => {setMale(event.target.value)};
	const hFemale = (event) => {setFemale(event.target.value)};
	const hHt = (event) => {setHt(event.target.value)};
	const hAge = (event) => {setAge(event.target.value)};
	const hWt =  (event) => {setWt(event.target.value)};

	const cal = (event) => {
		event.preventDefault();
		const minHt = 56;
		const maxHt = 213;
		const minWt = 3;
		const maxWt = 650;
		const minAge = 2;
		const maxAge = 120;
		if(ht == "")
		{
			alert(" Please Fill Height Field!!");
			setHt("");
			return;
		}
		else if(ht < 0)
		{
			alert("Negative Height Not Allowed, please enter valid height!!");
			setHt("");
			setAns1("");
			setAns2("");
			setAns3("");
			setAns4("");
			return;
		}
		else if(ht < minHt || ht > maxHt)
		{
			alert("Height must be between "+minHt+ " - "+maxHt);
			setHt("");
			setAns1("");
			setAns2("");
			setAns3("");
			setAns4("");
			return;
		}
		if(wt == "")
		{
			alert(" Please Fill Weight Field!!");
			setWt("");
			return;
		}
		else if(wt < 0)
		{
			alert("Negative Weight Not Allowed, please enter valid weight!!");
			setWt("");
			setAns1("");
			setAns2("");
			setAns3("");
			setAns4("");
			return;
		}
		else if(wt < minWt || wt > maxWt)
		{
			alert("Height must be between "+minWt+ " - "+maxWt);
			setWt("");
			setAns1("");
			setAns2("");
			setAns3("");
			setAns4("");
			return;
		}
	
		if(age == "")
		{
			alert(" Please Fill Age Field!!");
			setAge("");
			return;
		}
		else if(age < 0)
		{
			alert("Negative Age Not Allowed, please enter valid age!!");
			setAge("");
			setAns1("");
			setAns2("");
			setAns3("");
			setAns4("");
			return;
		}
		else if(age < minAge || age > maxAge)
		{
			alert("Age must be between "+minAge+ " - "+maxAge);
			setAge("");
			setAns1("");
			setAns2("");
			setAns3("");
			setAns4("");
			return;
		}
		let url = "https://bmicalculator-z57p.onrender.com/find";
		let data = {params: {ht: ht,wt: wt}};
		axios.get(url,data)
		.then(res =>{
			setAns1(res.data.msg1)
			setAns2(res.data.msg2)
			setAns3(res.data.msg3)
			setAns4(res.data.msg4)
		})
		.catch(err => setAns1("Issue "+err));
	}

	return(
	<>
	<center>
		<div className="container">
		<form onSubmit={cal}>
		<div className="header">
		<img src={img_1}/>
		<h1>BMI Calculator</h1>
		<h3>Body Mass Index</h3>
		</div>
		<div class="g">
		<label>Gender:</label>
		 <input type="radio" name="f" value="Male"onChange={hMale}  required/>Male
		<input type="radio" name="f" value="Female" onChange={hFemale} required/>Female
		</div>
		
		<div class="ht">
			<label>Height:</label> <input type="number" step="any"  placeholder="CM" onChange={hHt}
			style={{"border-radius":"10px", "width":"40%"}}/>
		</div>
		
		<div class="age">
			<label>Age:</label> <input type="number" step="any" placeholder="years" onChange={hAge}
			style={{"border-radius":"10px", "width":"30%"}}/>
		</div>
		
		<div class="wt">
		<label>Weight: </label><input type="number" step="any" placeholder="in Kgs" onChange={hWt}
		style={{"border-radius":"10px", "width":"40%"}}/>
		</div>

		<br/><br/>
		<input type="submit" value="Calculate" className="btn"/>
		</form>
		</div>
		<div className="result">
		<h3>{ans1}</h3>
		<h4>{ans2}</h4>
		<h5>{ans3}</h5>
		<p>{ans4}</p>
		</div>
	</center>
	</>
	);
}