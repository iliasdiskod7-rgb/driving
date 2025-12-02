// src/App.tsx

import Header from './Header'; // Εισαγωγή του Header
import './App.css'; // Υποθέτουμε ότι υπάρχει ένα βασικό CSS
import HeroSlider from './HeroSlider';
import SplashScreen from './SplashScreen';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <SplashScreen duration={1500} />
      <Header />
      <HeroSlider />
      <main>
        {/* Εδώ θα φορτώνονται τα περιεχόμενα της κάθε σελίδας */}
        <p style={{ padding: '20px', textAlign: 'center' }}>
          
        </p>
        <div style={{ height: '200vh' }}> {/* Προσθέτουμε ύψος για να φαίνεται το fixed header */}</div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;