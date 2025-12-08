// src/pages/Contact.tsx

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css'; // Θα χρειαστεί το CSS αρχείο

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.6724391703227!2d22.95669911957457!3d40.60155799732159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839f9972323c1%3A0x868c679a60e03e5c!2zzpzOsc-EzrHOu8-EzrHOtc-Dz4TOriDOtM6_z4XOuc-Ez4nPgc6_z43Ou86_!5e0!3m2!1sel!2sgr!4v1703964175345!5m2!1sel!2sgr";
const Contact: React.FC = () => {
    // Χρησιμοποιούμε state για τη διαχείριση των πεδίων της φόρμας
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Εδώ θα έρθει η λογική αποστολής του μηνύματος (π.χ., σε API ή email service)
        console.log('Φόρμα υποβλήθηκε:', formData);

        // Προσωρινή εμφάνιση μηνύματος επιτυχίας (μόνο για το frontend)
        alert(`Ευχαριστούμε, ${formData.name}! Το μήνυμά σας παραδόθηκε.`);
        
        // Καθαρισμός φόρμας
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact-page-wrapper">
            <header className="page-header">
                <h1 className='pou'>Επικοινωνήστε Μαζί μας 📞</h1>
                <p className='pou'>Είμαστε στη διάθεσή σας για οποιαδήποτε ερώτηση σχετικά με τα διπλώματα και τα μαθήματα.</p>
            </header>

            <div className="contact-layout">
                {/* 1. Φόρμα Επικοινωνίας (Αριστερά) */}
                <div className="contact-form-container">
                    <h2>Στείλτε μας μήνυμα</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        
                        <div className="form-group">
                            <label htmlFor="name">Ονοματεπώνυμο</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Τηλέφωνο (Προαιρετικό)</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="subject">Θέμα</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="message">Μήνυμα</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5} 
                                value={formData.message} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        
                        <button type="submit" className="submit-button">
                            Αποστολή Μηνύματος
                        </button>
                    </form>
                </div>

                {/* 2. Πληροφορίες & Χάρτης (Δεξιά) */}
                <div className="contact-info-container">
                    <h2>Στοιχεία Επικοινωνίας</h2>
                    <div className="info-item">
                        <FaMapMarkerAlt className="info-icon" />
                        <p>Λεωφ. Βασιλίσσης Όλγας 100, 546 43, Θεσσαλονίκη</p>
                    </div>
                    
                    <div className="info-item">
                        <FaPhoneAlt className="info-icon" />
                        <a href="tel:+302310123456">+30 2310 123456</a>
                    </div>
                    
                    <div className="info-item">
                        <FaEnvelope className="info-icon" />
                        <a href="mailto:info@sxolioodigon.gr">info@sxolioodigon.gr</a>
                    </div>
                    
                    {/* Προσθήκη Placeholder Χάρτη */}
                    <div className="map-wrapper">
                        <iframe 
                            title="Σχολή Οδηγών RED Map"
                            src={MAP_EMBED_URL} 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, borderRadius: '4px' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;