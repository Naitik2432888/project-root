import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Shop />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;