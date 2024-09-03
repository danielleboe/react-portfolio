import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Navigation from './components/navigation.jsx';
import About from './pages/about.jsx';
import Portfolio from './pages/portfolio.jsx';
import Contact from './pages/contact.jsx';
import Resume from './pages/resume.jsx';
import './app.css';

const App = () => (
  <Router>
    <Header />
    <Navigation />
    <main>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
