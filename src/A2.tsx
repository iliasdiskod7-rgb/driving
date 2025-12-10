// src/pages/A2.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import {  FaEuroSign, FaRegCalendarCheck, FaUserClock, FaMotorcycle } from 'react-icons/fa';
import './AM.css'; // Χρησιμοποιούμε το κοινό CSS

const A2: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/A2.jpg')" }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας Α2</h1>
                    <h2>Μοτοσυκλέτες Μέσης Ισχύος</h2>
                    <p className="hero-tagline">
                        Οδήγηση μοτοσυκλέτας έως **35kW** (47 ίπποι) από τα **20 σας χρόνια**!
                    </p>
                </div>
            </section>
            
            <div className="category-content-layout">

                {/* 1. ΠΡΟΫΠΟΘΕΣΕΙΣ ΚΑΙ ΔΙΑΔΙΚΑΣΙΑ */}
                <section className="details-section">
                    <h2>Προϋποθέσεις & Δικαιώματα Οδήγησης</h2>
                    
                    <div className="info-grid">
                        <div className="info-block">
                            <FaUserClock className="info-icon" />
                            <h3>Ηλικία</h3>
                            <p><strong>20 ετών</strong> συμπληρωμένα.</p>
                        </div>
                        <div className="info-block">
                            <FaMotorcycle className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Μοτοσυκλέτες με ισχύ έως 35kW (47 hp) και λόγο ισχύος/βάρους έως 0,2 kW/kg.</p>
                        </div>
                        <div className="info-block">
                            <FaRegCalendarCheck className="info-icon" />
                            <h3>Απαραίτητα Μαθήματα</h3>
                            <p><strong>21 ώρες</strong> Θεωρίας & <strong>14 ώρες</strong> Πρακτικής (Αν δεν υπάρχει Α1) Ή <strong>7 ώρες</strong> (Αν υπάρχει Α1).</p>
                        </div>
                        <div className="info-block">
                            <FaEuroSign className="info-icon" />
                            <h3>Επέκταση από Α1</h3>
                            <p>Αν κατέχετε Α1 για τουλάχιστον 2 χρόνια, χρειάζονται μόνο 7 πρακτικά μαθήματα.</p>
                        </div>
                    </div>
                </section>

                {/* 2. ΚΟΣΤΟΣ & ΔΙΑΔΙΚΑΣΙΑ (Πλαϊνό Sidebar) */}
                <aside className="sidebar-cost">
                    <h2>Κόστος και Διάρκεια</h2>
                    
                    <div className="cost-item">
                        <p><strong>Ελάχιστη Διάρκεια:</strong></p>
                        <p>1.5 - 2 μήνες</p>
                    </div>
                    
                    <div className="cost-item">
                        <p><strong>Παράβολα:</strong></p>
                        <p>~128€ (Πρώτη φορά) / ~68€ (Επέκταση)</p>
                    </div>

                    <div className="cost-item total">
                        <p><strong>Συνολικό Κόστος Σχολής:</strong></p>
                        <p>Ρωτήστε για τα ειδικά μας πακέτα!</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Το Α2 είναι το ιδανικό δίπλωμα για τις περισσότερες on-off και street μοτοσυκλέτες.
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Κάντε το βήμα για τη μεσαία κατηγορία!</p>
                <Link to="/services/moto" className="footer-cta-button-back">Άλλες Κατηγορίες Μοτοσυκλέτας</Link>
            </section>
            
        </div>
    );
};

export default A2;