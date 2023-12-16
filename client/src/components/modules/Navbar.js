import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

function NavigationBar() {
 return (
   <Navbar bg="light" expand="lg">
     <Container>
       <Navbar.Brand className='mr-auto' href="#home">
         <FontAwesomeIcon icon={faSchool} /> School System
       </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="ml-auto">
           <Link to="/Login" className="nav-link">
             <FontAwesomeIcon icon={faUser} /> Login
           </Link>
           <Link to="/Register" className="nav-link">
             <FontAwesomeIcon icon={faUserPlus} /> Register now!
           </Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>
 );
}

export default NavigationBar;

