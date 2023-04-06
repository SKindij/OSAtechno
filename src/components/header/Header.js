import React, { Component } from 'react';
import './header.css';
import miniLogo from './OSAtech-mini-logo.jpg';

class Header extends Component {
  componentDidMount() {
    document.querySelector('#backgr1').addEventListener('click', () => {
      document.body.style.backgroundColor = 'Black';
    });
    document.querySelector('#backgr2').addEventListener('click', () => {
      document.body.style.backgroundColor = 'PaleGoldenrod';
    });
    document.querySelector('#backgr3').addEventListener('click', () => {
      document.body.style.backgroundColor = 'Maroon';
    });
  }

  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img id="miniLogo" src={miniLogo} alt="OSAtechno-mini-logo" className="d-inline-block align-text-top me-2" />
          </a>
		  <h1><span className="osa-text">OSA - optimal selection of automation</span><br/>
            <small>Розумний підбір автоматики для воріт</small> </h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="btn btn-dark backgr" id="backgr1">O</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-warning backgr" id="backgr2">S</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger backgr" id="backgr3">A</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
