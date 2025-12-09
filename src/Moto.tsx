// src/pages/Moto.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Moto.css'; // Το CSS αρχείο μας

// Δεδομένα για τις 4 υποκατηγορίες μοτοσυκλέτας
const motoCategories = [
    {
        title: 'Κατηγορία ΑΜ',
        subtitle: 'Δίπλωμα Μοτοποδηλάτου',
        description: 'Οδήγηση δίκυκλων έως 50cc ή ελαφρών τετράκυκλων (γουρούνες) από 16 ετών.',
        image: '/photos/AM.jpg', // Placeholder
        path: '/services/am',
    },
    {
        title: 'Κατηγορία Α1',
        subtitle: 'Δίπλωμα 125cc',
        description: 'Οδήγηση μοτοσυκλετών με κυβισμό έως 125cc και ισχύ έως 11kW, από 18 ετών.',
        image: '/photos/A1.jpg', // Placeholder
        path: '/services/a1',
    },
    {
        title: 'Κατηγορία Α2',
        subtitle: 'Δίπλωμα Μεσαίας Ισχύος',
        description: 'Οδήγηση μοτοσυκλετών με ισχύ έως 35kW (47 ίππους), από 20 ετών.',
        image: '/photos/A2.jpg', // Placeholder
        path: '/services/a2',
    },
    {
        title: 'Κατηγορία Α',
        subtitle: 'Δίπλωμα Απεριόριστης Ισχύος',
        description: 'Οδήγηση όλων των μοτοσυκλετών (άνω των 35kW), από 24 ετών ή μετά από 2 χρόνια Α2.',
        image: '/photos/A.jpg', // Placeholder
        path: '/services/a',
    },
];

const Moto: React.FC = () => {
    return (
    
        <div className="moto-page-wrapper">
            
            {/* 1. HERO SECTION ΜΕ BACKGROUND ΕΙΚΟΝΑ */}
            <section className="moto-hero-section">
                <div className="hero-content-overlay">
                    <h1>Άδεια Οδήγησης Μοτοσυκλέτας</h1>
                    <p>
                        Επιλέξτε την κατηγορία που σας ταιριάζει για να αποκτήσετε την ελευθερία της κίνησης με ασφάλεια και υπευθυνότητα.
                    </p>
                    <Link to="/contact" className="hero-cta-button">
                        Κλείστε Ραντεβού
                    </Link>
                </div>
            </section>
           
            
            {/* 2. ΕΝΟΤΗΤΑ ΥΠΟΚΑΤΗΓΟΡΙΩΝ (4 Blocks Grid) */}
            <section className="moto-categories-section">
                <div className="categories-header">
                    <h2>Οι Κατηγορίες Δικύκλων</h2>
                    <p>Από μικρά μοτοποδήλατα (ΑΜ) έως μοτοσυκλέτες απεριόριστης ισχύος (Α).</p>
                </div>
                
                <div className="moto-categories-grid">
                    {motoCategories.map((cat, index) => (
                        <div key={index} className="category-card">
                            <div className="card-image-wrapper">
                                <img src={cat.image} alt={cat.title} />
                            </div>
                            <div className="card-content">
                                <h3>{cat.title}</h3>
                                <p className="subtitle">{cat.subtitle}</p>
                                <p>{cat.description}</p>
                                <Link to={cat.path} className="card-cta-button">
                                    Προϋποθέσεις & Κόστος
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ΠΡΟΣΘΕΤΟΥΜΕ: CTA για Ερωτήσεις */}
            <section className="moto-cta-footer">
                <p>Έχετε απορίες για την ηλικία ή τα μαθήματα; Επικοινωνήστε μαζί μας!</p>
                <Link to="/contact" className="footer-cta-button">Επικοινωνία</Link>
            </section>
  </div>
        
    );
};

export default Moto;