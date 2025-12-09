// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Εισαγωγή του Header
import './App.css'; // Υποθέτουμε ότι υπάρχει ένα βασικό CSS
import Home from './Home';
import SplashScreen from './SplashScreen';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import Moto from './Moto';
import Car from './Car';
import Pro from './Pro';
function App() {
  return (
    <Router>
    <ScrollToTop />
    <div className="App">
      <SplashScreen duration={1500} />
      <Header />
 
      <main>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/moto" element={<Moto />} />
      <Route path="/services/car" element={<Car />} />
      <Route path="/services/pro" element={<Pro />} />

    </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;