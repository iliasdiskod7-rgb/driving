// src/pages/AM.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaEuroSign, FaRegCalendarCheck, FaUserClock } from 'react-icons/fa';
import './AM.css'; // Θα χρησιμοποιήσουμε ένα κοινό CSS για όλες τις υποκατηγορίες

const AM: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION: Εστίαση στον τίτλο και την ηλικία */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/AM.jpg')" }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας ΑΜ</h1>
                    <h2>Μοτοποδήλατο και Ελαφρύ Τετράκυκλο</h2>
                    <p className="hero-tagline">
                        Ξεκινήστε την οδήγηση από τα **16 σας χρόνια**!
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
                            <p><strong>16 ετών</strong> συμπληρωμένα.</p>
                        </div>
                        <div className="info-block">
                            <FaGraduationCap className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Δίκυκλα έως 50cc (μοτοποδήλατα) ή ελαφριά τετράκυκλα (γουρούνες) έως 4kW.</p>
                        </div>
                        <div className="info-block">
                            <FaRegCalendarCheck className="info-icon" />
                            <h3>Απαραίτητα Μαθήματα</h3>
                            <p><strong>21 ώρες</strong> θεωρητικής εκπαίδευσης & <strong>14 ώρες</strong> πρακτικής εκπαίδευσης.</p>
                        </div>
                        <div className="info-block">
                            <FaEuroSign className="info-icon" />
                            <h3>Ιατρικές Εξετάσεις</h3>
                            <p>Απαιτείται πιστοποιητικό υγείας από παθολόγο και οφθαλμίατρο.</p>
                        </div>
                    </div>
                </section>

                {/* 2. ΚΟΣΤΟΣ & ΔΙΑΔΙΚΑΣΙΑ (Πλαϊνό Sidebar) */}
                <aside className="sidebar-cost">
                    <h2>Κόστος και Διάρκεια</h2>
                    
                    <div className="cost-item">
                        <p><strong>Ελάχιστη Διάρκεια:</strong></p>
                        <p>30 - 45 ημέρες</p>
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
                        Θέλετε να ξεκινήσετε άμεσα τα μαθήματα;
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Μην χάνετε χρόνο! Ξεκινήστε την οδήγηση από τα 16 σας!</p>
                <Link to="/services/moto" className="footer-cta-button-back">Άλλες Κατηγορίες Μοτοσυκλέτας</Link>
            </section>
            
        </div>
    );
};

export default AM;