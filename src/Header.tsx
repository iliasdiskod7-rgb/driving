// src/components/Header/Header.tsx

import React from 'react';
import type { NavLink }   from './types/index.ts'; // Εισαγωγή του τύπου μας
import './Header.css'; // Εισαγωγή του styling

// Ορίζουμε τους συνδέσμους πλοήγησης
const navLinks: NavLink[] = [
  { title: 'Αρχική', path: '/' },
  { title: 'Η Σχολή μας', path: '/about' },
  { title: 'Διπλώματα', path: '/services' },
  { title: 'Επικοινωνία', path: '/contact' },
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Εδώ θα μπει το λογότυπο της σχολής */}
        🚗 **Σχολή Οδηγών**
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              {/* Χρησιμοποιούμε έναν απλό <a> προς το παρόν. 
                  Θα τον αντικαταστήσουμε με <Link> από το React Router αργότερα. 
              */}
              <a href={link.path}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;