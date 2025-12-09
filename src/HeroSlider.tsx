// src/components/HeroSlider/HeroSlider.tsx
import React, { useState, useEffect,useMemo,useRef } from 'react';
import './HeroSlider.css';

// 1. Ορίζουμε τις διαφάνειες (slides)
// Προσοχή: Εδώ θα βάλετε τις πραγματικές διαδρομές των εικόνων σας
const slides = [
  { 
    id: 1, 
    image: './photos/car1.jpg', // Πρέπει να υπάρχει στο φάκελο public/images
    title: 'Δίπλωμα οδήγησης, από τα 17!',
    subtitle: 'Απονυπομονούμε να οδηγήσεις αυτοκίνητο πριν από τα 18 σου χρόνια.',
    cta: 'ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ'
  },
  { 
    id: 2, 
    image: './photos/car2.jpg', 
    title: 'Μάθετε για εμάς', 
    subtitle: 'Εκπαιδευτές με πολυετή εμπειρία σε όλες τις κατηγορίες.',
    cta: 'ΔΕΙΤΕ ΤΙΣ ΥΠΗΡΕΣΙΕΣ'
  },
  {
    id:3,
    image:'./photos/scouter.jpg',
    title:'H ευκολία της μετακίνησης που ψάχνεται',
    subtitle:'Ελάτε να μάθετε να οδηγείτε με ασφάλεια και αυτοπεποίθηση.',
    cta:'ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ'
   }
  // Προσθέστε όσα slides θέλετε
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const indexRef = useRef(currentIndex);
  // Δημιουργία του πίνακα με τον κλώνο (slide 1 στο τέλος)
  const infiniteSlides = useMemo(() => {
    return [...slides, slides[0]];
  }, []);

// 2. Λογική Αυτόματης Αλλαγής (useEffect)
useEffect(() => {
  const intervalId = setInterval(() => {
    // 1. Προχωράμε στον επόμενο δείκτη
    const nextIndex = indexRef.current + 1;
    setCurrentIndex(nextIndex);
    indexRef.current = nextIndex;
  }, 5000);

  // Clean-up function: Σταματάει το interval όταν το component "ξεφορτωθεί"
  return () => clearInterval(intervalId);
}, []);

useEffect(() => {
  indexRef.current = currentIndex;
  // Ελέγχουμε αν ο δείκτης έφτασε στον κλώνο
  if (currentIndex === slides.length) {
    // Ο χρόνος (800ms) πρέπει να είναι ίσος με τον χρόνο transition στο CSS (0.8s)
    setTimeout(() => {
      setIsTransitioning(false); // Απενεργοποίηση transition
      setCurrentIndex(0); // Άμεση μετακίνηση στο index 0 (πρώτη διαφάνεια)
      indexRef.current = 0;
    }, 800);
  }
  // Αν ο δείκτης είναι 0, ενεργοποιούμε το transition
  else if (currentIndex === 0) {
    // Δίνουμε λίγο χρόνο (50ms) στον browser να εφαρμόσει το 'transition: none'
    setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
  }
}, [currentIndex, slides.length]); // Εξαρτάται από το currentIndex για να ελέγξει την επαναφορά
const transformValue = `translateX(-${currentIndex * 100}vw)`;
const containerStyle = {
    transform: transformValue,
    transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none',
    width: `${infiniteSlides.length * 100}%`, // 4 slides = 400%
  };
  
 return (
    <div className="hero-slider-wrapper">
      <div className="slides-container" style={containerStyle}>
        {infiniteSlides.map((slide, index) => (
          // Κάθε slide-item έχει width: 100% και είναι float: left (CSS)
         <div 
            key={index} // Χρησιμοποιούμε index ως key γιατί το id επαναλαμβάνεται (λόγω κλώνου)
            className="slide-item"
            // ΚΡΙΣΙΜΟ: Το πλάτος αλλάζει σε calc(100% / 4)
            style={{ 
                backgroundImage: `url(${slide.image})`, 
                width: `calc(100% / ${infiniteSlides.length})` 
            }}
          >
            {/* Περιεχόμενο (Content Box) */}
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button className="cta-button">{slide.cta}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Δείκτες (Pagination Dots) */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
    </div>
  );
};

export default HeroSlider;