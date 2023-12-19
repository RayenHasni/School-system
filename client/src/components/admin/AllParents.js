import { useEffect, useState } from "react";
import axios from "axios";


const AllParents = ({setChoosePhone}) => {
    const url =  process.env.REACT_APP_port+'/getParents'
    const [parents, setParents] = useState(null);
    const getParents = async () => {
      await axios
        .get(url)
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
        <div className="pt-5" id="allParents">
          <h3 className="p-2">All parents we have</h3>
          <ul className="list-group list-group-flush" >
            {parents &&
              parents.map((parent) => {
                return (
                  <li key={parent._id} className="list-group list-group-flush py-3 px-5">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {parent.FirstName} {parent.LastName}
                    </a>
                    <ul className="dropdown-menu ">
                      <li className="dropdown-item"> CIN : {parent.CIN}</li>
                      <li className="dropdown-item" onClick={()=>{setChoosePhone(parent.Phone)}}> Phone : {parent.Phone}</li>
                      <li className="dropdown-item">
                        {" "}
                        Adress : {parent.Adress}
                      </li>
                    </ul>
                    <hr className="mx-5 d-flex justify-content-center "/>

                  </li>
                );
              })}
          </ul>
        </div>
     );
}
 
export default AllParents;