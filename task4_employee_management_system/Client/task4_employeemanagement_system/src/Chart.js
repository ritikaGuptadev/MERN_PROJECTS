import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer } from 'recharts';
import Navbar from "./Navbar";

export default function Chart()
{
	const nav = useNavigate();
	const [data,setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect( () => {
		let un = localStorage.getItem("un");
		if(un == null)
		{
			nav("/login");
		}
		else
		{
			fetchData();
		}
	},[nav]);

	const fetchData = () => {
		axios.get("https://employeemanagementsystem-t9y2.onrender.com/read")
		.then((response) => {
			console.log("Fetched Data: ",response.data);
			setData(response.data);
		})
		.catch((error) => {
			console.error("Error fetchind data: ",error);
		})
		.finally( () => {
			setLoading(false);
		});
	};

	const transformedData = data.map(item => ({
		name: item._id,
		value: parseFloat(item.salary)
	}));

	console.log(transformedData);
	return(
	<>
	<center>
		<Navbar/>
		<div className="container1">
			<div className="header2">
				<h1>Employee Bar Chart( X Axis: Employee ID, Y Axis: Employee Salary)</h1>
			</div>
			<div className="table">
				{loading ? (
					<p>Loading Data...</p>
				) : (
				     <>
					<ResponsiveContainer width="100%" height={600}>
						<BarChart
						   width={300}
						   height={300}
						   data={transformedData}
						   margin={{
							top:5,
							right:70,
							left:50,
							bottom:5,
						}}
						barSize={20}
						>
						<XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10}}/>
						<YAxis/>
						<Tooltip/>
						<Legend/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Bar dataKey="value" fill="#8884d8" background={{fill: "#bbb"}}/>
					   	</BarChart>
					</ResponsiveContainer>
				     </>
				)}
			</div>		
		</div>
	</center>
	</>
	);
}