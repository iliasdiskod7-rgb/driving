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
import Services from './Services';
import AM from './AM';
import A1 from './A1';
import A2 from './A2';
import A from './A';
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
      <Route path="/services" element={<Services />} />
      <Route path="/services/moto/am" element={<AM />} />
      <Route path="/services/moto/a1" element={<A1 />} />
      <Route path="/services/moto/a2" element={<A2 />} />
      <Route path="/services/moto/a" element={<A />} />

    </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;