import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/common/Header";
import { MainPage, ResidentialGates, IndustrialGates, GarageRollerShutters, WindowRollerShutters, NotFoundPage } from './components/pages';
import Footer from "./components/common/Footer";

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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
