// src/components/SplashScreen/SplashScreen.tsx

import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  duration?: number; // Πόσο θα μείνει το splash screen (σε ms)
}

const SplashScreen: React.FC<SplashScreenProps> = ({ duration = 1500 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFlashing, setIsFlashing] = useState(false); // Νέο state

 useEffect(() => {
    // 1. Ενεργοποίηση του Flash Blur μετά από 100ms
    const flashTimer = setTimeout(() => {
      setIsFlashing(true);
      // Απενεργοποίηση του flash μετά από 300ms
      setTimeout(() => {
          setIsFlashing(false);
      }, 300);
    }, 100);

    // 2. Τελική εξαφάνιση μετά το συνολικό χρόνο
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(flashTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  if (!isVisible) {
    return null;
  }
  const classes = `splash-screen ${isFlashing ? 'flash-effect' : ''}`;

  return (
    <div className={classes}>
    <div className="splash-screen">
      <div className="splash-content">
        <h1>🚗 Σχολή Οδηγών</h1>
        <div className="spinner"></div> {/* Ένα απλό loading animation */}
      </div>
    </div>
    </div>
  );
};

export default SplashScreen;