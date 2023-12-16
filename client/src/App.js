import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Register from "./components/register.js";
import Home from "./components/home";
import ProfilePage from "./components/profile.js";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
