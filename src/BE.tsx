// src/pages/BE.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaRegCalendarCheck, FaUserClock, FaTrailer } from 'react-icons/fa';
import './AM.css'; // Χρησιμοποιούμε το κοινό CSS

const BE: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/caravan.jpg')" }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας ΒΕ</h1>
                    <h2>Οδήγηση με Ρυμουλκούμενο (Trailer)</h2>
                    <p className="hero-tagline">
                        Επέκταση του διπλώματος Β για οδήγηση μεγάλων ρυμουλκούμενων ή caravan!
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
                            <FaRegCalendarCheck className="info-icon" />
                            <h3>Απαραίτητη Προϋπόθεση</h3>
                            <p>Πρέπει να κατέχετε ήδη **δίπλωμα Κατηγορίας Β**.</p>
                        </div>
                        <div className="info-block">
                            <FaTrailer className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Σύνολα οχημάτων (ελκυστήρας κατηγορίας Β + ρυμουλκούμενο) όπου το ρυμουλκούμενο ζυγίζει έως 3.500 κιλά.</p>
                        </div>
                        <div className="info-block">
                            <FaGraduationCap className="info-icon" />
                            <h3>Απαραίτητα Μαθήματα</h3>
                            <p>Δεν απαιτούνται θεωρητικά. <strong>10 ώρες</strong> πρακτικής εκπαίδευσης.</p>
                        </div>
                    </div>
                </section>

                {/* 2. ΚΟΣΤΟΣ & ΔΙΑΔΙΚΑΣΙΑ (Πλαϊνό Sidebar) */}
                <aside className="sidebar-cost">
                    <h2>Κόστος και Διαδικασία</h2>
                    
                    <div className="cost-item">
                        <p><strong>Ελάχιστη Διάρκεια:</strong></p>
                        <p>30 - 45 ημέρες</p>
                    </div>
                    
                    <div className="cost-item">
                        <p><strong>Παράβολα:</strong></p>
                        <p>~128€ (Επέκταση)</p>
                    </div>

                    <div className="cost-item total">
                        <p><strong>Συνολικό Κόστος Σχολής:</strong></p>
                        <p>Επικοινωνήστε για την καλύτερη τιμή!</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Είναι ιδανικό για όσους θέλουν να οδηγούν μεγάλες τουριστικές ρυμούλκες (caravan) ή επαγγελματικά ρυμουλκούμενα.
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Επεκτείνετε τις δυνατότητές σας! Αποκτήστε το δίπλωμα ΒΕ.</p>
                <Link to="/services/car" className="footer-cta-button-back">Άλλες Υπηρεσίες Αυτοκινήτου</Link>
            </section>
            
        </div>
    );
};

export default BE;