// import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from "/src/components/footer.jsx";
import Navigation from "/src/components/navigation.jsx";
import About from "/src/pages/about.jsx";
import Portfolio from "/src/pages/portfolio.jsx";
import Contact from "/src/pages/contact.jsx";
import Resume from "/src/pages/resume.jsx";
import "./App.css";

// const App = () => (
//   <Router>
//     <Navigation />
//     <Header />
//     <main>
//       <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/resume" element={<Resume />} />
//       </Routes>
//     </main>
//     <Footer />
//   </Router>
// );

// export default App;


function App() {
  return(
  <Router>
    <Navigation />
    <main>
      
      <Routes>
      <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

}

export default App;