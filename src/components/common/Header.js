// Header.js
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../resources/commonImages/OSA-mini-logo.jpg';
import './Common.scss';

const Header = () => {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo-link">
              <img src={logo} alt="OSA-mini-logo" className="logo" />
              <span className="brand-name">OSA - Optimal Selection of Accessories</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={NavLink} to="/residential" className="nav-link" activeClassName="active">
                Residential Gates
              </Nav.Link>
              <Nav.Link as={NavLink} to="/industrial" className="nav-link" activeClassName="active">
                Industrial Gates
              </Nav.Link>
              <Nav.Link as={NavLink} to="/garageroller" className="nav-link" activeClassName="active">
                Garage Rollers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/windowroller" className="nav-link" activeClassName="active">
                Window Rollers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
