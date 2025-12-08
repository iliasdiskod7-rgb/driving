// src/pages/About.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import './About.css'; // Θα χρειαστούμε ένα CSS αρχείο για αυτή τη σελίδα
const IMAGE_1 = './photos/car4.jpg';
const IMAGE_2='./photos/car3.jpg'  // Βάλτε εδώ τη διαδρομή προς τη φωτογραφία σας
const About: React.FC = () => {
    const [isLoaded1, setIsLoaded1] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
  return (
    <div className="about-page-wrapper">
      <header className="page-header">
        <h1>Η Σχολή μας 🚗</h1>
        <p>Λίγα λόγια για την ιστορία και τη φιλοσοφία μας.</p>
      </header>
      <div className="content-layout ">
      <section className="about-content">
        
        <p>
          Η Σχολή Οδηγών **RED** άνοιξε την πόρτα της, για πρώτη φορά τον **Ιανουάριο του 2014**.
        </p>
        
        <p>
          Ήταν μια περίεργη περίοδος για την οικονομία της χώρας μας, αλλά η αγάπη μας για τον κλάδο της εκπαίδευσης οδηγών μάς έκανε να τολμήσουμε τη δημιουργία της σχολής. Από τότε, μέχρι σήμερα πολλά έχουν αλλάξει. Ξεκινήσαμε με **2 μόλις μηχανές** και μέχρι σήμερα καταφέραμε να αυξήσουμε τον στόλο μας αρκετά.
        </p>
        
        <div className="fleet-stats">
            <p>Αυτή τη στιγμή βρισκόμαστε σε έναν όμορφο χώρο **53τμ** επί της οδού Παπάφη και διαθέτουμε:</p>
            <ul>
                <li> 3 Αυτοκίνητα</li>
                <li> 6 Μηχανές</li>
            </ul>
            <p>Όλα τα οχήματά μας είναι **σύγχρονα** και **σωστά συντηρημένα** (καινούργια ελαστικά, φρένα κτλ).</p>
        </div>

        <p className="final-message">
          Διαθέτουμε όρεξη και μεράκι να σας μεταδώσουμε τις γνώσεις μας και τις εμπειρίες μας για την οδήγηση και θα είναι μεγάλη μας χαρά να μας εμπιστευτείτε.
          <br/><br/>
          **Εδώ η επιθυμία γίνεται επιτυχία.**
        </p>
      </section>
      
    <div className="about-image-container">
          <img src={IMAGE_1} alt="Εσωτερική/Εξωτερική όψη της σχολής"
          onLoad={() => setIsLoaded1(true)} // Θέτει το state σε true
                        className={isLoaded1 ? 'image-fade-in' : 'image-loading'} />
        </div>
        </div>
        <div className="content-layout ">        
        {/* Εικόνα Αριστερά */}
        <div className="about-image-container">
          <img src={IMAGE_2} alt="Η ομάδα των εκπαιδευτών"
           onLoad={() => setIsLoaded2(true)} // Θέτει το state σε true
                        className={isLoaded2 ? 'image-fade-in' : 'image-loading'}/>
        </div>
        <section className="about-content">
          <h2>Η Εκπαιδευτική μας Ομάδα</h2>
          <p>
            Η επιτυχία της Σχολής Οδηγών RED βασίζεται στους **πιστοποιημένους εκπαιδευτές** μας, οι οποίοι διαθέτουν πολυετή εμπειρία και συνεχώς ενημερώνονται για τις τελευταίες εξελίξεις στην οδική ασφάλεια.
          </p>
          <p>
            Είμαστε δίπλα σας σε κάθε βήμα, προσφέροντας **εξατομικευμένη υποστήριξη** και μαθήματα προσαρμοσμένα στις δικές σας ανάγκες και το δικό σας ρυθμό.
          </p>
          <p style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link to="/contact" className="cta-button-about">Επικοινωνήστε για εγγραφή!</Link>
          </p>
        </section>
      </div>
    </div>
 
  );
 
};
  

export default About;