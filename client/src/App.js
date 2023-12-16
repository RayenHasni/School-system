import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavigationBar from './components/modules/Navbar';
import HomePageBody from './components/modules/Body';
import Footer from './components/modules/Footer';
import Login from './components/login.js';
import Register from './components/register.js';

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
          <Routes>
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
          </Routes>
      </Router>
      <HomePageBody />
      <Footer />
    </div>
  );
}

export default App;
