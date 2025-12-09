// src/pages/Pro.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Pro.css'; // Το CSS αρχείο μας

// Δεδομένα για τις υποκατηγορίες Επαγγελματικών Οχημάτων
const proCategories = [
    {
        title: 'Κατηγορία C',
        subtitle: 'Φορτηγά (Truck)',
        description: 'Οδήγηση οχημάτων με μέγιστη μάζα άνω των 3.500 κιλών και 8+1 θέσεις, από 21 ετών.',
        image: '/photos/truck1.jpg', // Placeholder
        path: '/services/c',
    },
    {
        title: 'Κατηγορία CE',
        subtitle: 'Νταλίκες (Με Ρυμουλκούμενο)',
        description: 'Οδήγηση Φορτηγών (C) με συζευγμένο ρυμουλκούμενο. Απαραίτητο για νταλίκες και βαρέα συρμούς.',
        image: '/photos/truck2.jpg', // Placeholder
        path: '/services/ce',
    },
    {
        title: 'Κατηγορία D',
        subtitle: 'Λεωφορεία (Bus)',
        description: 'Οδήγηση οχημάτων με περισσότερες από 8+1 θέσεις, από 24 ετών. Απαραίτητο για μεταφορά επιβατών.',
        image: '/photos/bus.jpg', // Placeholder
        path: '/services/d',
    }
];

const Pro: React.FC = () => {
    return (
        <div className="pro-page-wrapper">
            
            {/* 1. HERO SECTION ΜΕ BACKGROUND ΕΙΚΟΝΑ */}
            <section className="pro-hero-section">
                <div className="hero-content-overlay">
                    <h1>Άδεια Οδήγησης Επαγγελματικών Οχημάτων</h1>
                    <p>
                        Εξειδίκευση σε φορτηγά (C), λεωφορεία (D) και Πιστοποιητικό Επαγγελματικής Ικανότητας (ΠΕΙ).
                    </p>
                    <Link to="/contact" className="hero-cta-button">
                        Δείτε τα Ειδικά Πακέτα
                    </Link>
                </div>
            </section>
            
            {/* 2. ΕΝΟΤΗΤΑ ΥΠΟΚΑΤΗΓΟΡΙΩΝ (4 Blocks Grid) */}
            <section className="pro-categories-section">
                <div className="categories-header">
                    <h2>Εκπαίδευση για Βαρέα Οχήματα</h2>
                    <p>Αποκτήστε την επαγγελματική άδεια που χρειάζεστε για την καριέρα σας.</p>
                </div>
                
                <div className="pro-categories-grid">
                    {proCategories.map((cat, index) => (
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

            {/* CTA για Ερωτήσεις */}
            <section className="pro-cta-footer">
                <p>Ενημερωθείτε για τα μαθήματα ΠΕΙ και τις διαδικασίες έκδοσης διπλωμάτων.</p>
                <Link to="/contact" className="footer-cta-button">Επικοινωνία</Link>
            </section>

        </div>
    );
};

export default Pro;