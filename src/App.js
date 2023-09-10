import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to My Portfolio</h1>;
}

export default App;
