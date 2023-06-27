import React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/common/Header";
import MainPage from "./components/pages/MainPage";
import Footer from "./components/common/Footer";
// with this type of import webpack looks in index.js in pages folder
const ResidentialGates = lazy(() => import('./components/pages/ResidentialGatesPage'));
const IndustrialGates = lazy(() => import('./components/pages/IndustrialGatesPage'));
const GarageRollerShutters = lazy(() => import('./components/pages/GarageRollerPage'));
const WindowRollerShutters = lazy(() => import('./components/pages/WindowRollerPage'));
const Page404 = lazy(() => import('./components/pages/NotFoundPage'));

function App() {
  return (
      <div className="app">
        <Header />
        <main>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* ensures that only one route is rendered at a time */}
            <Route path="/" element={<MainPage />} />
            <Route path="/residential" element={<ResidentialGates />} />
            <Route path="/industrial" element={<IndustrialGates />} />
            <Route path="/garageroller" element={<GarageRollerShutters />} />
            <Route path="/windowroller" element={<WindowRollerShutters />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
  );
}
export default App;
