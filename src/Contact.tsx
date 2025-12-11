// src/pages/Contact.tsx

import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css'; // Θα χρειαστεί το CSS αρχείο

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.6724391703227!2d22.95669911957457!3d40.60155799732159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a839f9972323c1%3A0x868c679a60e03e5c!2zzpzOsc-EzrHOu8-EzrHOtc-Dz4TOriDOtM6_z4XOuc-Ez4nPgc6_z43Ou86_!5e0!3m2!1sel!2sgr!4v1703964175345!5m2!1sel!2sgr";
const validateEmailFormat = (email: string) => {
    // Πολύ βασικό regex. Ελέγχει την ύπαρξη @ και τουλάχιστον ενός . μετά το @
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return re.test(String(email).toLowerCase());
};
const Contact: React.FC = () => {
    // Χρησιμοποιούμε state για τη διαχείριση των πεδίων της φόρμας
    const [emailError, setEmailError] = useState('');
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
    const [isSubmitted, setIsSubmitted] = useState(false); // Αν εστάλη επιτυχώς
    const [isSubmitting, setIsSubmitting] = useState(false); // Αν γίνεται αποστολή τώρα
    const [error, setError] = useState(''); // Μήνυμα σφάλματος

    const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       if (!validateEmailFormat(formData.email)) {
            setEmailError('Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email (π.χ. email@domain.gr).');
            return; // Σταματάει την αποστολή
        }
        
        // Καθαρίζουμε τυχόν προηγούμενα σφάλματα
        setEmailError('');
       setIsSubmitting(true);
        setError('');
        
        // ** ΝΕΑ ΛΟΓΙΚΗ: ΑΠΟΣΤΟΛΗ ΣΤΟ BACKEND Ή ΣΕ SERVICE **
       try {
            // Το URL του Express Server
            const response = await fetch('http://localhost:3001/send-contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // ΕΠΙΤΥΧΙΑ! Εμφάνιση του μηνύματος επιβεβαίωσης
                setIsSubmitted(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); // Καθαρισμός
            } else {
                // ΑΠΟΤΥΧΙΑ SERVER SIDE (π.χ. Nodemailer error)
                setError('Προέκυψε σφάλμα κατά την επεξεργασία του αιτήματος. Παρακαλώ δοκιμάστε ξανά.');
            }
        } catch (err) {
            // ΑΔΥΝΑΜΙΑ ΣΥΝΔΕΣΗΣ (π.χ. Server Down)
            console.error('Contact form submit error:', err);
            setError('Αδυναμία σύνδεσης με τον διακομιστή. Βεβαιωθείτε ότι ο server είναι ενεργός.' + (err instanceof Error ? ` ${err.message}` : ''));
        } finally {
            setIsSubmitting(false);
        }
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
                    {isSubmitted ? (
                        <div className="submission-success-message">
                            <h2>✅ Το Μήνυμα Εστάλη Επιτυχώς!</h2>
                            <p>Ευχαριστούμε για το ενδιαφέρον σας. Θα επικοινωνήσουμε άμεσα μαζί σας για να συζητήσουμε τις ανάγκες σας.</p>
                            <p>Παρακαλούμε ελέγξτε και το email σας για την αυτόματη επιβεβαίωση .</p>
                            <button onClick={() => setIsSubmitted(false)} className="submit-button">
                                Νέο Αίτημα
                            </button>
                        </div>
                    ):(
                    
                    <form onSubmit={handleSubmit} className="contact-form">
                        <h2>Στείλτε μας μήνυμα</h2>
                        {error && <p className="form-error-message">{error}</p>}
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
                                pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                            />
                            {emailError && <p className="input-error-message">{emailError}</p>}
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
                        
                        <button type="submit" className="submit-button" disabled={isSubmitting}>
                                {isSubmitting ? 'Αποστολή...' : 'Αποστολή Μηνύματος'}
                            </button>
                    </form>
                    )}
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