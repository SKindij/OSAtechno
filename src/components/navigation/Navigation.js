import React from 'react';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">My Website</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="sliding-automatic.html">автоматика<br> відкатні ворота</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="swing-automatic.html">автоматика<br> розпашні ворота</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="garage-automatic.html">ел/приводи на ворота гаражні</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">автопарковки та шлагбауми</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="interesting-useful.html">цікава та корисна інформація</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://games.osatechno.com/">домен розваг<br>GAMES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="back-page.html">форма для<br>зв'язку</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
