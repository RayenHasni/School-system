import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Home from "./pages/home";
 import Admin from "./pages/Admin.js";
import NotFound from "./pages/not-found.js";
import Profile from "./pages/profile.js";
import AllChilds from "./components/dashboard/navigateTo/allChilds.js";
import SingleChild from "./components/dashboard/navigateTo/singleChild.js";
import Contact from "./components/dashboard/navigateTo/contactUs.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Profile/>}>
                <Route path="" element={<AllChilds/>} />
                <Route path="childProfile" element={<SingleChild/>}/>
                <Route path="Contact" element={<Contact/>}/>
          </Route>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
