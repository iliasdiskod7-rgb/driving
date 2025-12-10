// src/pages/A.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import {  FaEuroSign, FaRegCalendarCheck, FaUserClock, FaRoad } from 'react-icons/fa';
import './AM.css'; // Χρησιμοποιούμε το κοινό CSS

const A: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/A.jpg')" }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας Α</h1>
                    <h2>Μοτοσυκλέτες Απεριόριστης Ισχύος</h2>
                    <p className="hero-tagline">
                        Οδήγηση **όλων των μοτοσυκλετών**, χωρίς περιορισμό ισχύος!
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
                            <p><strong>24 ετών</strong> συμπληρωμένα (ή 22 αν κατέχετε Α2 για 2 χρόνια).</p>
                        </div>
                        <div className="info-block">
                            <FaRoad className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Όλες οι μοτοσυκλέτες, ανεξαρτήτως κυβισμού και ισχύος (άνω των 35kW).</p>
                        </div>
                        <div className="info-block">
                            <FaRegCalendarCheck className="info-icon" />
                            <h3>Απαραίτητα Μαθήματα</h3>
                            <p><strong>21 ώρες</strong> Θεωρίας & <strong>14 ώρες</strong> Πρακτικής (Αν δεν υπάρχει δίπλωμα) Ή <strong>7 ώρες</strong> (Μετά από 2 χρόνια Α2).</p>
                        </div>
                        <div className="info-block">
                            <FaEuroSign className="info-icon" />
                            <h3>Διαδικασία</h3>
                            <p>Απαιτούνται εξετάσεις (Θεωρία + Πρακτικά) ή μόνο Πρακτικά (για επέκταση από Α2).</p>
                        </div>
                    </div>
                </section>

                {/* 2. ΚΟΣΤΟΣ & ΔΙΑΔΙΚΑΣΙΑ (Πλαϊνό Sidebar) */}
                <aside className="sidebar-cost">
                    <h2>Κόστος και Διάρκεια</h2>
                    
                    <div className="cost-item">
                        <p><strong>Ελάχιστη Διάρκεια:</strong></p>
                        <p>2 - 3 μήνες</p>
                    </div>
                    
                    <div className="cost-item">
                        <p><strong>Παράβολα:</strong></p>
                        <p>~128€ (Αρχική έκδοση) / ~68€ (Επέκταση)</p>
                    </div>

                    <div className="cost-item total">
                        <p><strong>Συνολικό Κόστος Σχολής:</strong></p>
                        <p>Επικοινωνήστε για την καλύτερη τιμή!</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Η κορυφαία κατηγορία για ατελείωτες διαδρομές και υψηλές επιδόσεις.
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Είστε έτοιμοι για την απεριόριστη ελευθερία; </p>
                <Link to="/services/moto" className="footer-cta-button-back">Άλλες Κατηγορίες Μοτοσυκλέτας</Link>
            </section>
            
        </div>
    );
};

export default A;