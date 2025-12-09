// src/pages/Car.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Car.css'; // Το CSS αρχείο μας

// Δεδομένα για τις υποκατηγορίες αυτοκινήτου
const carCategories = [
    {
        title: 'Κατηγορία Β',
        subtitle: 'Δίπλωμα Ιδιωτικής Χρήσης (Ι.Χ.)',
        description: 'Οδήγηση αυτοκινήτων με μέγιστη μάζα έως 3.500 κιλά και 8+1 θέσεις, από 18 ετών.',
        image: '/photos/car8.jpg', // Placeholder
        path: '/services/b',
    },
    {
        title: 'Κατηγορία ΒΕ',
        subtitle: 'Ρυμουλκούμενο (Τρέιλερ)',
        description: 'Οδήγηση οχημάτων Β κατηγορίας με συζευγμένο ρυμουλκούμενο (πάνω από 750kg) ή αρθρωτό σύνολο (πάνω από 3.500kg).',
        image: '/photos/caravan.jpg', // Placeholder
        path: '/services/be',
    }
];

const Car: React.FC = () => {
    return (
        <div className="car-page-wrapper">
            
            {/* 1. HERO SECTION ΜΕ BACKGROUND ΕΙΚΟΝΑ */}
            <section className="car-hero-section">
                <div className="hero-content-overlay">
                    <h1>Άδεια Οδήγησης Αυτοκινήτου</h1>
                    <p>
                        Το πρώτο βήμα προς την ανεξαρτησία σας. Αποκτήστε το δίπλωμα Β (Ι.Χ.) ή επεκτείνετε το για ρυμουλκούμενα (ΒΕ).
                    </p>
                    <Link to="/contact" className="hero-cta-button">
                        Δείτε τα Πακέτα μας
                    </Link>
                </div>
            </section>
            
            {/* 2. ΕΝΟΤΗΤΑ ΥΠΟΚΑΤΗΓΟΡΙΩΝ (4 Blocks Grid) */}
            <section className="car-categories-section">
                <div className="categories-header">
                    <h2>Οι Υπηρεσίες για το Αυτοκίνητο</h2>
                    <p>Βασικές κατηγορίες, ανανεώσεις και εξειδικευμένα μαθήματα.</p>
                </div>
                
                <div className="car-categories-grid">
                    {carCategories.map((cat, index) => (
                        <div key={index} className="category-card">
                            <div className="card-image-wrapper">
                                <img src={cat.image} alt={cat.title} />
                            </div>
                            <div className="card-content">
                                <h3>{cat.title}</h3>
                                <p className="subtitle">{cat.subtitle}</p>
                                <p>{cat.description}</p>
                                <Link to={cat.path} className="card-cta-button">
                                    Μάθετε Περισσότερα
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA για Ερωτήσεις */}
            <section className="car-cta-footer">
                <p>Έχετε απορίες σχετικά με την παράδοση μαθημάτων ή το κόστος; Καλέστε μας!</p>
                <Link to="/contact" className="footer-cta-button">Επικοινωνία</Link>
            </section>

        </div>
    );
};

export default Car;