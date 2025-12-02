// src/components/Footer/Footer.tsx

import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Χρειάζεται εγκατάσταση!
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                {/* 1. Στοιχεία Επικοινωνίας */}
                <div className="footer-section contact-info">
                    <h2>Επικοινωνία</h2>
                    <ul>
                        <li>
                            <span className="icon"><FaPhoneAlt /></span>
                            <a href="tel:+302310123456">+30 2310 123456</a>
                        </li>
                        <li>
                            <span className="icon"><FaEnvelope /></span>
                            <a href="mailto:info@sxolioodigon.gr">info@sxolioodigon.gr</a>
                        </li>
                    </ul>
                </div>

                {/* 2. Διεύθυνση */}
                <div className="footer-section address-info">
                    <h2>Διεύθυνση</h2>
                    <p>
                        <span className="icon"><FaMapMarkerAlt /></span>
                        Λεωφ. Βασιλίσσης Όλγας 100 <br/>
                        546 43, Θεσσαλονίκη
                    </p>
                    <p>
                        Ωράριο: Δευ-Παρ: 09:00 - 20:00
                    </p>
                </div>

                {/* 3. Social Media */}
                <div className="footer-section social-media">
                    <h2>Βρείτε μας</h2>
                    <div className="social-links">
                        <a href="https://facebook.com/drivingschool" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://instagram.com/drivingschool" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Σχολή Οδηγών. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;