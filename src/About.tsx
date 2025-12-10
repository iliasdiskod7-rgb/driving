// src/pages/About.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaMotorcycle, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'; // Νέα icons
import './About.css'; // Κρατάμε το δικό του CSS, αλλά θα το ενημερώσουμε

 

const About: React.FC = () => {
    // Κρατάμε απλή φόρτωση, χωρίς το state loading, για ευκολία
    
    return (
        <div className="about-page-wrapper">
            
            {/* 1. HERO SECTION */}
            <section className="about-hero-section" >
                <div className="hero-content-overlay">
                    <h1>Η Σχολή Οδηγών RED</h1>
                    <h2>Εμπειρία, Σύγχρονος Στόλος & Υπευθυνότητα</h2>
                    <p className="hero-tagline">
                        Εκπαιδεύουμε με πάθος τους οδηγούς του αύριο. Από το 2014, η επιθυμία γίνεται επιτυχία.
                    </p>
                </div>
            </section>
            
            <div className="about-content-layout">

                {/* 2. ΚΥΡΙΟ ΠΕΡΙΕΧΟΜΕΝΟ: Ιστορία & Φιλοσοφία */}
                <section className="about-details-section">
                    <h2>Η Ιστορία και η Φιλοσοφία μας</h2>
                    
                    <p>
                        Η Σχολή Οδηγών **RED** άνοιξε την πόρτα της, για πρώτη φορά τον **Ιανουάριο του 2014**. Ξεκινήσαμε με 2 μόλις μηχανές, αλλά η αγάπη μας για τον κλάδο μάς έκανε να αυξήσουμε τον στόλο μας και να επεκτείνουμε τις υπηρεσίες μας.
                    </p>
                    <p>
                        Η επιτυχία μας βασίζεται στους **πιστοποιημένους εκπαιδευτές** μας, οι οποίοι διαθέτουν πολυετή εμπειρία και συνεχώς ενημερώνονται για τις τελευταίες εξελίξεις στην οδική ασφάλεια.
                    </p>

                    <h3>Ο Στόλος μας</h3>
                    <div className="info-grid">
                        <div className="info-block">
                            <FaCar className="info-icon" />
                            <h3>Αυτοκίνητα</h3>
                            <p>3 Αυτοκίνητα τελευταίας τεχνολογίας.</p>
                        </div>
                        <div className="info-block">
                            <FaMotorcycle className="info-icon" />
                            <h3>Μηχανές</h3>
                            <p>6 Σύγχρονες μοτοσυκλέτες για όλες τις κατηγορίες (ΑΜ, Α1, Α2, Α).</p>
                        </div>
                        <div className="info-block">
                            <FaUsers className="info-icon" />
                            <h3>Εκπαιδευτές</h3>
                            <p>Πιστοποιημένοι και έμπειροι εκπαιδευτές, δίπλα σας σε κάθε βήμα.</p>
                        </div>
                    </div>

                    <p className="final-message">
                        **Εδώ η επιθυμία γίνεται επιτυχία.** Ελάτε να μας γνωρίσετε!
                    </p>
                </section>

                {/* 3. SIDEBAR: Πληροφορίες & CTA */}
                <aside className="about-sidebar-info">
                    <h2>Γενικές Πληροφορίες</h2>
                    
                    <div className="info-item-sidebar">
                        <FaMapMarkerAlt className="info-icon" />
                        <p><strong>Διεύθυνση:</strong></p>
                        <p>Λεωφ. Βασιλίσσης Όλγας 100, 546 43, Θεσσαλονίκη</p>
                    </div>
                    
                    <div className="info-item-sidebar">
                        <FaCar className="info-icon" />
                        <p><strong>Ίδρυση:</strong></p>
                        <p>Ιανουάριος 2014</p>
                    </div>
                    
                    <div className="info-item-sidebar">
                        <FaUsers className="info-icon" />
                        <p><strong>Ειδίκευση:</strong></p>
                        <p>Όλες οι κατηγορίες διπλωμάτων (Α, Β, C, D).</p>
                    </div>

                    <p className="cta-sidebar-text">
                        Είμαστε στη διάθεσή σας για οποιαδήποτε πληροφορία.
                    </p>
                    <Link to="/contact" className="sidebar-cta-button">
                        Επικοινωνία & Εγγραφές
                    </Link>
                </aside>
                
            </div>
            
        </div>
    );
};

export default About;