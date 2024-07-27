import {useState,useRef,useEffect} from "react";
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Enquiry()
{
	const nav = useNavigate();
	const rName = useRef("");	
	const rAddress = useRef("");
	const rPhone = useRef("");

	const [name,setName] = useState("");
	const [phone,setPhone] = useState("");
	const [address,setAddress] = useState("");
	const [pro1,setPro1] = useState(false);
	const [pro2,setPro2] = useState(false);
	const [pro3,setPro3] = useState(false);
	const [pro4,setPro4] = useState(false);
	const [pro5,setPro5] = useState(false);
	const [ans,setAns] = useState("");

	const hName = (event) => {setName(event.target.value);}
	const hPhone = (event) => {setPhone(event.target.value);}
	const hAddress = (event) => {setAddress(event.target.value);}
	const hPro1 = (event) => {setPro1(!pro1);}
	const hPro2 = (event) => {setPro2(!pro2);}
	const hPro3 = (event) => {setPro3(!pro3);}
	const hPro4 = (event) => {setPro4(!pro4);}
	const hPro5 = (event) => {setPro5(!pro5);}

	const save = (event) => {
		event.preventDefault();
	
		if(!name.match(/^[A-Za-z ]+$/))
		{
			alert("Only Alphabets are allowed!!!");
			setName("");
			setAns("");
			rName.current.focus();
			return;
		}
		else if(name.trim().length < 2)
		{
			alert("Name must have minimum two letters");
			setName("");
			setAns("");
			rName.current.focus();
			return;
		}
		if (/^\d+$/.test(address)) {
    		alert("Address cannot consist entirely of numbers.");
  		}

  		if (/^[A-Za-z]+$/.test(address)) {
   		 alert("Address cannot consist entirely of text.");
  		}

 		 if (address < 0) {
    		alert("Negative values are not allowed in the address.");
  		}

  		if (/^\s+$/.test(address)) {
    		alert("Address cannot consist entirely of spaces.");
  		}

  		if (/[^a-zA-Z0-9,.-\s]/.test(address)) {
   		 alert("Address contains invalid special characters.");
  		}

		if(!(address.length > 5 && address.length < 100))
		{
			alert("Address must be between 5 to 100 characters");
			setAddress("");
			setAns("");
			rAddress.current.focus();
			return;
		}
		if(!phone.match(/^[0-9]{10}$/))
		{
			alert("Invalid Phone Number!!Please enter a 10-digit number.");
			setPhone("");
			setAns("");
			rPhone.current.focus();
			return;
		}
		
		let lang = "";
		if(pro1)
		{
			lang += " Product1";
		}
		if(pro2)
		{
			lang += " Product2";
		}
		if(pro3)
		{
			lang += " Product3";
		}
		if(pro4)
		{
			lang += " Product4";
		}
		if(pro5)
		{
			lang += " Product5";
		}
		let url = "http://localhost:9000/save";
		let data = {phone, name, address, lang};
		axios.post(url,data)
		.then(res => {
			if(res.data.insertedId == phone)
			{
				setAns("Enquiry Submitted");
				setName("");
				setAddress("");
				setPhone("");
				setPro1(false);
       				setPro2(false);
       				setPro3(false);
        				setPro4(false);
        				setPro5(false);
				rName.current.focus();
				return;
			}
			else{
				setAns("Data Already Exist!!");
				setPhone("");
				rName.current.focus();
				return;
			}
		})
		.catch(err => setAns("Issue "+err));
	}
	return(
	<>
	<center>
	<NavBar/>
	<div className="container">
		<form onSubmit={save}>
		<div className="headere">
		<h1>Enquiry Form</h1>
		</div>
		<div class="e">
			<label>Name</label>
			
			<input type="text" placeholder="Enter Name" required style={{"border-radius":"10px", "width":"80%","margin-left":"2%"}}
			onChange={hName} value={name} ref={rName}/>
		</div>
		<div class="p">	
			<label>Phone No</label>
			<input type="number" placeholder="Enter Phone Number" required style={{"border-radius":"10px", "width":"80%","margin-left":"2%"}}
			onChange={hPhone} value={phone} ref={rPhone}/>
		</div>
		<div class="p">
			<label>Address</label>
			<input type="text" placeholder="Enter Address" required  style={{"border-radius":"10px", "width":"80%","margin-left":"2%"}}
			onChange={hAddress} value={address} ref={rAddress}/>
		</div>
		<div class="c">
			<label style={{"margin-left":"2%","margin-top":"-1%","margin":"-3%"}}>Select Products</label>
			<div class="check">
			<label for="p1">
			 <input type="checkbox"  checked={pro1} onChange={hPro1} value="Product1"/>Product 1
			</label>
			<label for="p2">
			<input type="checkbox"  checked={pro2} onChange={hPro2} value="Product2"/>Product 2
			</label>
			<label for="p3">
			<input type="checkbox" checked={pro3} onChange={hPro3} value="Product3"/>Product 3
			</label>
			<label for="p4">
			<input type="checkbox" checked={pro4} onChange={hPro4}  value="Product4"/>Product 4
			</label>
			<label for="p5">
			<input type="checkbox" checked={pro5} onChange={hPro5} value="Product5"/>Product 5
			</label>
			</div>
		</div>
			<br/><br/>
			<input type="submit" class="btn" value="Submit"/>
		</form>
	</div>
		<h2> { ans }</h2>
	</center>
	</>
	);
}