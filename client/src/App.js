import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login.js";
import Register from "./pages/register.js";
import Home from "./pages/home";
import Dashboard from "./components/dashboard/dashboard.js";
import Admin from "./pages/Admin.js";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Profile" element={<Dashboard/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/*' element={<h1>Not found 404</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
