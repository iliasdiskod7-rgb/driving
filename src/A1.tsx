// src/pages/A1.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaEuroSign, FaRegCalendarCheck, FaUserClock } from 'react-icons/fa';
import './AM.css'; // Χρησιμοποιούμε το κοινό CSS

const A1: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION: Εστίαση στον τίτλο και την ηλικία */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/A1.jpg')" }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας Α1</h1>
                    <h2>Μοτοσυκλέτες έως 125cc</h2>
                    <p className="hero-tagline">
                        Οδήγηση μοτοσυκλέτας έως **11kW** από τα **18 σας χρόνια**!
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
                            <FaGraduationCap className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Μοτοσυκλέτες έως 125cc, μέγιστη ισχύς 11kW και λόγος ισχύος/βάρους έως 0,1 kW/kg.</p>
                        </div>
                        <div className="info-block">
                            <FaRegCalendarCheck className="info-icon" />
                            <h3>Απαραίτητα Μαθήματα</h3>
                            <p><strong>21 ώρες</strong> θεωρητικής εκπαίδευσης & <strong>14 ώρες</strong> πρακτικής εκπαίδευσης (αν δεν υπάρχει ΑΜ).</p>
                        </div>
                        <div className="info-block">
                            <FaEuroSign className="info-icon" />
                            <h3>Με Βεβαίωση 95/5</h3>
                            <p>Δυνατότητα οδήγησης 125cc με δίπλωμα Β (αυτοκινήτου) και παρακολούθηση 5 πρακτικών μαθημάτων.</p>
                        </div>
                    </div>
                </section>

                {/* 2. ΚΟΣΤΟΣ & ΔΙΑΔΙΚΑΣΙΑ (Πλαϊνό Sidebar) */}
                <aside className="sidebar-cost">
                    <h2>Κόστος και Διάρκεια</h2>
                    
                    <div className="cost-item">
                        <p><strong>Ελάχιστη Διάρκεια:</strong></p>
                        <p>40 - 50 ημέρες</p>
                    </div>
                    
                    <div className="cost-item">
                        <p><strong>Τέλη Υπέρ του Δημοσίου:</strong></p>
                        <p>~128€ (Παράβολα)</p>
                    </div>

                    <div className="cost-item total">
                        <p><strong>Συνολικό Κόστος Σχολής:</strong></p>
                        <p>Επικοινωνήστε για την καλύτερη τιμή!</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Έχετε δίπλωμα Β; Ρωτήστε μας για τη διαδικασία της βεβαίωσης 95/5!
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Είστε έτοιμοι για την πρώτη σας μοτοσυκλέτα 125cc;</p>
                <Link to="/services/moto" className="footer-cta-button-back">Άλλες Κατηγορίες Μοτοσυκλέτας</Link>
            </section>
            
        </div>
    );
};

export default A1;