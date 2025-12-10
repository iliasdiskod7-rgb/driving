// src/pages/Services.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'; // Το CSS αρχείο μας

// Δεδομένα για τις 3 κύριες κατηγορίες διπλωμάτων
const mainCategories = [
    {
        title: 'Διπλώματα Μοτοσυκλέτας',
        subtitle: 'Κατηγορίες ΑΜ, Α1, Α2, Α',
        description: 'Μάθετε να οδηγείτε με ασφάλεια δίκυκλα, από 50cc έως μοτοσυκλέτες απεριόριστης ισχύος.',
        image: '/photos/moto1.jpg', // Placeholder
        path: '/services/moto.jpg',
        bgColor: '#30a5cc', // Μπλε
    },
    {
        title: 'Διπλώματα Αυτοκινήτου',
        subtitle: 'Κατηγορίες Β, ΒΕ',
        description: 'Αποκτήστε την άδεια οδήγησης Ι.Χ., ενώ παρέχουμε και μαθήματα για οδήγηση με ρυμουλκούμενο.',
        image: '/photos/car9.jpg', // Placeholder
        path: '/services/car',
        bgColor: '#2a09b9ff', // Σκούρο
    },
    {
        title: 'Επαγγελματικά Διπλώματα',
        subtitle: 'Κατηγορίες C, D, CE, ΠΕΙ',
        description: 'Εκπαιδευτείτε σε φορτηγά, λεωφορεία και νταλίκες, ξεκινώντας την επαγγελματική σας καριέρα.',
        image: '/photos/truck3.jpg', // Placeholder
        path: '/services/pro',
        bgColor: '#386641', // Πράσινο (για διάκριση)
    },
];

const Services: React.FC = () => {
    return (
        <div className="services-page-wrapper">
            
            {/* 1. HERO SECTION */}
            <section className="services-hero-section">
                <div className="hero-content-overlay">
                    <h1>Όλες οι Κατηγορίες Διπλωμάτων</h1>
                    <p>
                        Η σχολή μας προσφέρει πλήρη εκπαίδευση για όλες τις κατηγορίες οχημάτων. Επιλέξτε την υπηρεσία που σας ενδιαφέρει.
                    </p>
                    <Link to="/contact" className="hero-cta-button">
                        Επικοινωνήστε για Κόστος
                    </Link>
                </div>
            </section>
            
            {/* 2. ΚΥΡΙΕΣ ΚΑΤΗΓΟΡΙΕΣ (3 Blocks Grid) */}
            <section className="main-categories-section">
                <div className="categories-header">
                    <h2>Επιλέξτε Κατηγορία Οχήματος</h2>
                    <p>Διαλέξτε το δίπλωμα που θέλετε να αποκτήσετε:</p>
                </div>
                
                <div className="main-categories-grid">
                    {mainCategories.map((cat, index) => (
                        <div key={index} 
                             className="category-card" 
                             style={{ backgroundColor: cat.bgColor }}>
                             
                            <div className="card-image-wrapper">
                                <img src={cat.image} alt={cat.title} />
                            </div>
                            <div className="card-content">
                                <h3>{cat.title}</h3>
                                <p className="subtitle">{cat.subtitle}</p>
                                <p>{cat.description}</p>
                                
                                <Link to={cat.path} className="card-cta-button-light">
                                    Δείτε Υποκατηγορίες
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Services;