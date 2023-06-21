import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../resources/commonImages/OSA-mini-logo.jpg';
import './Common.scss';

const Header = () => {
  return (
    <header className="header">
    <Container>
      {/* left part of navigation */}
      <Navbar expand="md" variant="light" >
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand>
            <Link to="/" className="logo-link" >
              <img src={logo} alt="OSA-mini-logo" className="logo d-inline-block" />{' '}
                <span className="brand-name">OSAtechno</span> 
            </Link>           
          </Navbar.Brand>
        </Container>
        {/* right part of navigation */}
        <Container>         
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
            <nav>
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/residential" 
                  className="nav-link" activeclassname="active">
                    Residential Gates
                </Nav.Link>
                <Nav.Link as={NavLink} to="/industrial" 
                  className="nav-link" activeclassname="active">
                    Industrial Gates
                </Nav.Link>
                <Nav.Link as={NavLink} to="/garageroller" 
                  className="nav-link" activeclassnamee="active">
                    Garage Rollers
                </Nav.Link>
                <Nav.Link as={NavLink} to="/windowroller" 
                  className="nav-link" activeclassname="active">
                    Window Rollers
                </Nav.Link>
              </Nav>
            </nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
    </header>
  );
};
export default Header;