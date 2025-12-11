// src/pages/CE.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap,  FaRegCalendarCheck, FaUserClock, FaTruckMoving } from 'react-icons/fa';
import './AM.css'; // Χρησιμοποιούμε το κοινό CSS

const CE: React.FC = () => {
    return (
        <div className="category-page-wrapper">
            
            {/* HERO SECTION */}
            <section className="category-hero-section" style={{ backgroundImage: "url('/photos/truck2.jpg')",
                  backgroundPosition: "center 70%"
            }}>
                <div className="hero-content-overlay">
                    <h1>Δίπλωμα Κατηγορίας CE</h1>
                    <h2>Νταλίκα / Φορτηγό με Ρυμουλκούμενο</h2>
                    <p className="hero-tagline">
                        Η κορυφαία κατηγορία για τον επαγγελματία οδηγό: Οδήγηση βαρέων συρμών!
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
                            <p>Πρέπει να κατέχετε ήδη **δίπλωμα Κατηγορίας C**.</p>
                        </div>
                        <div className="info-block">
                            <FaTruckMoving className="info-icon" />
                            <h3>Τύπος Οχήματος</h3>
                            <p>Σύνολα οχημάτων (ελκυστήρας κατηγορίας C + ρυμουλκούμενο) όπου το ρυμουλκούμενο ζυγίζει πάνω από 750 κιλά.</p>
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
                        <p>Επικοινωνήστε για τα ειδικά πακέτα C+CE!</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Το δίπλωμα CE είναι το κλειδί για τις διεθνείς μεταφορές και τις μεγαλύτερες ευκαιρίες εργασίας.
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνήστε Τώρα
                    </Link>
                </aside>
                
            </div>
            
            {/* 3. CTA FOOTER */}
            <section className="category-cta-footer">
                <p>Είστε έτοιμοι να οδηγήσετε νταλίκα;</p>
                <Link to="/services/pro" className="footer-cta-button-back">Άλλες Επαγγελματικές Κατηγορίες</Link>
            </section>
            
        </div>
    );
};

export default CE;