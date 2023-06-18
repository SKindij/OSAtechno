import React from 'react';
import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/common/Header";
// with this type of import webpack looks in index.js in pages folder
import { MainPage, ResidentialGates, IndustrialGates, GarageRollerShutters, WindowRollerShutters, NotFoundPage } from './components/pages';
import Footer from "./components/common/Footer";

// put dynamic imports after static imports
const Page404 = lazy( () => import('./components/pages/NotFoundPage') );


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* ensures that only one route is rendered at a time */}
            <Route path="/" element={<MainPage />} />
            <Route path="/residential" element={<ResidentialGates />} />
            <Route path="/industrial" element={<IndustrialGates />} />
            <Route path="/garageroller" element={<GarageRollerShutters />} />
            <Route path="/windowroller" element={<WindowRollerShutters />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
