// src/pages/B.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaEuroSign, FaRegCalendarCheck, FaUserClock, FaCar } from 'react-icons/fa';
import './AM.css'; // Χρησιμοποιούμε το κοινό CSS

const B: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/car9.jpg')" }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας Β</h1>
                    <h2>Άδεια Οδήγησης Ιδιωτικής Χρήσης (Ι.Χ.)</h2>
                    <p className="hero-tagline">
                        Αποκτήστε την άδεια για να οδηγήσετε το πρώτο σας αυτοκίνητο από τα **18 σας χρόνια**!
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
                            <p><strong>18 ετών</strong> συμπληρωμένα.</p>
                        </div>
                        <div className="info-block">
                            <FaCar className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Αυτοκίνητα με μέγιστη μάζα έως 3.500 κιλά και 8+1 θέσεις, καθώς και μικρά μοτοποδήλατα (ΑΜ).</p>
                        </div>
                        <div className="info-block">
                            <FaRegCalendarCheck className="info-icon" />
                            <h3>Απαραίτητα Μαθήματα</h3>
                            <p><strong>21 ώρες</strong> θεωρητικής εκπαίδευσης & <strong>25 ώρες</strong> πρακτικής εκπαίδευσης.</p>
                        </div>
                        <div className="info-block">
                            <FaEuroSign className="info-icon" />
                            <h3>Δυνατότητα Προετοιμασίας</h3>
                            <p>Μπορείτε να ξεκινήσετε τα θεωρητικά μαθήματα πριν κλείσετε τα 18.</p>
                        </div>
                    </div>
                </section>

                {/* 2. ΚΟΣΤΟΣ & ΔΙΑΔΙΚΑΣΙΑ (Πλαϊνό Sidebar) */}
                <aside className="sidebar-cost">
                    <h2>Κόστος και Διάρκεια</h2>
                    
                    <div className="cost-item">
                        <p><strong>Ελάχιστη Διάρκεια:</strong></p>
                        <p>45 - 60 ημέρες</p>
                    </div>
                    
                    <div className="cost-item">
                        <p><strong>Τέλη Υπέρ του Δημοσίου:</strong></p>
                        <p>~168€ (Παράβολα)</p>
                    </div>

                    <div className="cost-item total">
                        <p><strong>Συνολικό Κόστος Σχολής:</strong></p>
                        <p>Επικοινωνήστε για τα πλήρη πακέτα!</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Είμαστε εδώ για να σας καθοδηγήσουμε βήμα-βήμα στην επιτυχία.
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Κάντε σήμερα το πρώτο βήμα προς την ανεξαρτησία!</p>
                <Link to="/services/car" className="footer-cta-button-back">Άλλες Υπηρεσίες Αυτοκινήτου</Link>
            </section>
            
        </div>
    );
};

export default B;