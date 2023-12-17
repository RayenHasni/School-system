import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Home from "./pages/home";
import ProfilePage from "./pages/profile.js";
import NavBarLogged from "./components/NavbarLogged.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/profile" element={<NavBarLogged/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
