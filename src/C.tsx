// src/pages/C.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap,  FaRegCalendarCheck, FaUserClock, FaTruck } from 'react-icons/fa';
import './AM.css'; // Χρησιμοποιούμε το κοινό CSS

const C: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/truck1.jpg')" }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας C</h1>
                    <h2>Οδήγηση Φορτηγού</h2>
                    <p className="hero-tagline">
                        Ξεκινήστε την επαγγελματική σας καριέρα οδηγώντας μεσαία και μεγάλα φορτηγά!
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
                            <p><strong>21 ετών</strong> συμπληρωμένα.</p>
                        </div>
                        <div className="info-block">
                            <FaRegCalendarCheck className="info-icon" />
                            <h3>Απαραίτητη Προϋπόθεση</h3>
                            <p>Πρέπει να κατέχετε ήδη **δίπλωμα Κατηγορίας Β**.</p>
                        </div>
                        <div className="info-block">
                            <FaTruck className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Αυτοκίνητα (φορτηγά) με μέγιστη μάζα άνω των 3.500 κιλών.</p>
                        </div>
                        <div className="info-block">
                            <FaGraduationCap className="info-icon" />
                            <h3>Απαραίτητα Μαθήματα</h3>
                            <p><strong>35 ώρες</strong> Θεωρίας & <strong>15 ώρες</strong> Πρακτικής (αν δεν υπάρχει ΠΕΙ), ή λιγότερα με ΠΕΙ.</p>
                        </div>
                    </div>
                </section>

                {/* 2. ΚΟΣΤΟΣ & ΔΙΑΔΙΚΑΣΙΑ (Πλαϊνό Sidebar) */}
                <aside className="sidebar-cost">
                    <h2>Κόστος και ΠΕΙ</h2>
                    
                    <div className="cost-item">
                        <p><strong>Πιστοποιητικό Επαγγελματικής Ικανότητας (ΠΕΙ):</strong></p>
                        <p>Απαιτείται για την οδήγηση φορτηγού για επαγγελματικούς σκοπούς.</p>
                    </div>
                    
                    <div className="cost-item">
                        <p><strong>Παράβολα:</strong></p>
                        <p>Περίπου ~168€ (Δίπλωμα) + ~210€ (ΠΕΙ)</p>
                    </div>

                    <div className="cost-item total">
                        <p><strong>Συνολικό Κόστος Σχολής:</strong></p>
                        <p>Συνδυαστικά Πακέτα C + ΠΕΙ</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Το δίπλωμα C ανοίγει πόρτες στην αγορά εργασίας. Μάθετε για τα πακέτα με ΠΕΙ.
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Είστε έτοιμοι να γίνετε επαγγελματίας οδηγός; </p>
                <Link to="/services/pro" className="footer-cta-button-back">Άλλες Επαγγελματικές Κατηγορίες</Link>
            </section>
            
        </div>
    );
};

export default C;