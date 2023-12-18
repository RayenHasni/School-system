import axios from "axios";
import NavigationBar from "../components/Navbar";
import { useEffect, useState } from "react";

const Admin = () => {
  const [parents, setParents] = useState(null);
  const getParents = async () => {
    await axios
      .get("http://localhost:8000/getParents")
      .then((res) => {
        setParents(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getParents();
  }, []);
  return (
    <div>
      <NavigationBar />
      <div className="d-flex">
        <div className="p-5" style={{ minHeight: "90vh", width: "70%" }}>
           <h3 className="p-2">Send SMS :</h3>

        </div>
        <div className="bg-secondary mt-5 mx-2" style={{width: '1px'}}></div>
        <div className="pt-5" style={{ minHeight: "90vh", width: "30%" }}>
          <h3 className="p-2">All parents we have</h3>
          <ul className="list-group list-group-flush">
            {parents &&
              parents.map((parent) => {
                return (
                  <li className="list-group list-group-flush py-3 px-5">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {parent.FirstName} {parent.LastName}
                    </a>
                    <ul className="dropdown-menu w-25">
                      <li className="dropdown-item"> CIN : {parent.CIN}</li>
                      <li className="dropdown-item"> Phone : {parent.Phone}</li>
                      <li className="dropdown-item">
                        {" "}
                        Adress : {parent.Adress}
                      </li>
                    </ul>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
