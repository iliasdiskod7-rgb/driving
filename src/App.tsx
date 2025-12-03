// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Εισαγωγή του Header
import './App.css'; // Υποθέτουμε ότι υπάρχει ένα βασικό CSS
import HeroSlider from './HeroSlider';
import SplashScreen from './SplashScreen';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <Router>
    <div className="App">
      <SplashScreen duration={1500} />
      <Header />
 
      <main>
    <Routes>
      <Route path="/" element={<HeroSlider />} />
      <Route path="/about" element={<About />} />
    </Routes>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;