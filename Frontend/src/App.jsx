import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/Common/ScrollToTop';

import Home from './components/Home/Home';
import About from './pages/About/About';
import Tours from './pages/Tours/Tours';
import Services from './pages/Services/Services';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Admin from './pages/Admin/Admin';
import Attestation from './pages/Attestation/Attestation';
import CertificateAttestation from './pages/CertificateAttestation/CertificateAttestation';

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="app-container">
      {!isAdmin && <Navbar />}
      <main className={isAdmin ? 'admin-main-wrapper-route' : 'main-content'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/destinations" element={<Navigate to="/gallery" replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/attestation" element={<Attestation />} />
          <Route path="/services/attestation" element={<Attestation />} />
          <Route path="/certificate-attestation" element={<CertificateAttestation />} />
          <Route path="/services/certificate-attestation" element={<CertificateAttestation />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
