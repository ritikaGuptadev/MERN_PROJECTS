import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) {
      nav("/login");
    }
  }, [nav]);

  const [currLocation, setCurrLocation] = useState({});
  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const location = await axios.get("https://ipapi.co/json");
      setCurrLocation(location.data);
    } catch (error) {
      console.error("Error fetching location: ", error);
    }
  };

  // visualcrossing link
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    if (currLocation.city) {
      axios
        .get(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${currLocation.city}?unitGroup=metric&key=RYEPZFBRMVZHKNJYGZXYRMB3X&contentType=json`
        )
        .then((response) => {
          setWeatherData(response.data);
          console.log(response.data);
        })
        .catch((error) => alert("Error fetching data: ", error));
    }
  }, [currLocation]);

  useEffect(() => {
    let url = "https://employeemanagementsystem-t9y2.onrender.com/read";
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => alert("Issue " + err));
  }, []);

  const delStu = (id) => {
    let url = "https://employeemanagementsystem-t9y2.onrender.com/remove";
    let d = { data: { id } };
    axios
      .delete(url, d)
      .then((res) => {
        alert("Record Deleted");
        window.location.reload();
      })
      .catch((err) => alert("Issue " + err));
  };

  const updateStu = (i, n, s) => {
    nav("/update", { state: { i, n, s } });
  };

  return (
    <>
      <center>
        <Navbar />
        <div className="container1">
          <div className="header1">
            <h1>Employee Management System</h1>
          </div>
          <div className="location">
            <h1>Current Location:</h1>
            <h3>Latitude: {currLocation.latitude}</h3>
            <h3>Longitude: {currLocation.longitude}</h3>
            <h3>City: {currLocation.city}</h3>
          </div>
          <div className="temp">
            <h1>Current Temperature: {weatherData.currentConditions?.temp}°C</h1>
            <h3>Condition: {weatherData.currentConditions?.conditions}</h3>
            <h3>Humidity: {weatherData.currentConditions?.humidity}</h3>
            <h3>Time Of Reported Weather Conditions: {weatherData.currentConditions?.datetime}</h3>
          </div>
          <br />
          <div className="table">
            <table border="5" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Employee Id</th>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                  <th>Delete Employee</th>
                  <th>Update Employee</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(data) ? (
                  data.map((e) => (
                    <tr key={e._id} style={{ textAlign: "center" }}>
                      <th>{e._id}</th>
                      <th>{e.name}</th>
                      <th>{e.salary}</th>
                      <th>
                        <button
                          className="button"
                          onClick={() => {
                            if (window.confirm("Are you sure?")) delStu(e._id);
                          }}
                        >
                          Delete
                        </button>
                      </th>
                      <th>
                        <button
                          className="button"
                          onClick={() => {
                            updateStu(e._id, e.name, e.salary);
                          }}
                        >
                          Update
                        </button>
                      </th>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </center>
    </>
  );
}
