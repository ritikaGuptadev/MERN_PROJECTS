import {useState,useEffect} from "react";
import NavBar from "./NavBar";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Home() {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    let un = localStorage.getItem("un");
    if (un == null) {
      nav("/login");
    }
  }, []);

  useEffect(() => {
    let url = "http://localhost:9000/read";
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => alert("Issue " + err));
  }, []);

  const delStu = (phone) => {
    let url = "http://localhost:9000/remove";
    let d = { data: { phone } };
    axios
      .delete(url, d)
      .then((res) => {
        alert("Record Deleted");
        window.location.reload();
      })
      .catch((err) => alert("Issue " + err));
  };

  return (
    <>
      <center>
        <NavBar />
        <div className="container1">
        <div className="header1">
        <h1>Enquiry Management System</h1>
        </div>
        <div class="table">
        <table border="5" style={{ "width": "100%"}}>
          <thead>
            <tr>
              <th>Phone No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Products</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e._id} style={{ "textAlign": "center" }}>
                <th>{e._id}</th>
                <th>{e.name}</th>
                <th>{e.address}</th>
                <th>{e.lang}</th>
                <th>
                  <button className="button-delete"
                    onClick={() => {
                      if (window.confirm("Are u sure??")) delStu(e._id);
                    }}
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      </center>
    </>
  );
}

export default Home;