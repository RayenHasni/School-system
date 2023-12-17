import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool,faUser } from "@fortawesome/free-solid-svg-icons";

function NavBarLogged() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ><Link to="/" className='text-decoration-none'> <FontAwesomeIcon icon={faSchool} /> School System</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link><Link to="/Login" >
            <FontAwesomeIcon icon={faUser} />Login
             </Link></Nav.Link>
             <NavDropdown title="Profile" id="collapsible-nav-dropdown"><FontAwesomeIcon icon={faUser} />
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to="/" >
            <FontAwesomeIcon icon={faUser} />Logout
             </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarLogged;