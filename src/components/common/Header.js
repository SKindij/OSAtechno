import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../../resources/commonImages/OSA-mini-logo.jpg';
import './Common.scss';

const Header = () => {
  /* To make <"header-content"> collapse when user navigates to other pages,
   we use React state to control its visibility.
  */
  const [isHeaderContentVisible, setHeaderContentVisible] = useState(true);

  const handleNavLinkClick = () => {    
    setTimeout( () => {
      setHeaderContentVisible(false);
    }, 300);
  };
  const handleBrandLinkClick = () => {
    setTimeout( () => {
      setHeaderContentVisible(true);
    }, 300);     
  };

  return (
    <header className="header">
    <Container>
      {/* left part of navigation */}
      <Navbar expand="md" variant="light" >
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">
            <Link to="/" className="logo-link" onClick={handleBrandLinkClick}>
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
                  className="nav-link" activeclassname="active"
                  onClick={handleNavLinkClick}>
                    Residential Gates
                </Nav.Link>
                <Nav.Link as={NavLink} to="/industrial" 
                  className="nav-link" activeclassname="active"
                  onClick={handleNavLinkClick}>
                    Industrial Gates
                </Nav.Link>
                <Nav.Link as={NavLink} to="/garageroller" 
                  className="nav-link" activeclassnamee="active"
                  onClick={handleNavLinkClick}>
                    Garage Rollers
                </Nav.Link>
                <Nav.Link as={NavLink} to="/windowroller" 
                  className="nav-link" activeclassname="active"
                  onClick={handleNavLinkClick}>
                    Window Rollers
                </Nav.Link>
              </Nav>
            </nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* element will only be rendered if isHeaderContentVisible is true */}
      {isHeaderContentVisible && (
        <div className="header-content">
          <h2 className="mb-3">OSA - Optimal Selection of Accessories</h2>
          <p className="mb-3">
            Web application 🔮 designed to assist 👷 users 🔍 in finding ⭐ the best in terms of price-quality ratio accessories
            for 🔧 upgrading, 🔨 repairing, or 🔱 enhancing various types of gates and roller shutters.
          </p>
        </div>
      )}
    </Container>
    </header>
  );
};

export default Header;