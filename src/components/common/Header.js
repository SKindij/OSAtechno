import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../resources/commonImages/OSA-mini-logo.jpg';
import './Common.scss';

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="logo-link">
            <img src={logo} thumbnail="true" alt="OSA-mini-logo" className="logo" />
          </Link>

          <Navbar bg="light" expand="md">
            <Container>

              <Navbar.Brand>
                <Link to="/" className="brand-name">OSA</Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link as={NavLink} to="/residential" className="nav-link" activeclassname="active">
                    Residential Gates
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/industrial" className="nav-link" activeclassname="active">
                    Industrial Gates
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/garageroller" className="nav-link" activeclassnamee="active">
                    Garage Rollers
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/windowroller" className="nav-link" activeclassname="active">
                    Window Rollers
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              
            </Container>
          </Navbar>
        </div>

        <div className="pb-3 text-center bg-light banner">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h2 className="mb-3">OSA - Optimal Selection of Accessories</h2>
            <p className="mb-3">
              Web application 🔮 designed to assist 👷 users 🔍 in finding ⭐ the best in terms of price-quality ratio accessories
              for 🔧 upgrading, 🔨 repairing, or 🔱 enhancing various types of gates and roller shutters.
            </p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

