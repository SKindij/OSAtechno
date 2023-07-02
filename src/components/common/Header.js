import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../../resources/commonImages/OSA-mini-logo.jpg';
import './Common.scss';
const Header = () => {
  const handleLanguageSwitch = () => {
    window.location.href = 'https://ua.osatechno.com/';
  };
  return (
    <header className="header">
      <Container fluid className="upper-header">
        <div className="hashtag">#StandWithUkraine</div>
        <Button variant="light" className="language-switch-button" onClick={handleLanguageSwitch}>
            <span className="language-text">UA</span>
        </Button>
      </Container>
      <Container fluid className="header-container">
        <Navbar expand="md" variant="light">
          <Container>
            <Navbar.Brand>
              <Link to="/" className="logo-link">
                <img src={logo} alt="OSA-mini-logo" className="logo d-inline-block" />{' '}
                <span className="brand-name">OSAtechno</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/residential" className="nav-link" >
                    Residential Gates
                </Nav.Link>
                <Nav.Link as={NavLink} to="/industrial" className="nav-link" >
                    Industrial Gates
                </Nav.Link>
                <Nav.Link as={NavLink} to="/garageroller" className="nav-link" >
                    Garage Rollers
                </Nav.Link>
                <Nav.Link as={NavLink} to="/windowroller" className="nav-link" >
                    Window Rollers
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </header>
  );
};
export default Header;