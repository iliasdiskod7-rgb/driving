// src/components/Header/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // <-- Κρίσιμη εισαγωγή
import './Header.css'; // Εισαγωγή του styling

// Local NavLink types including optional subCategories and nestedCategories
type NestedCategory = {
  title: string;
  path: string;
};

type SubCategory = {
  title: string;
  path: string;
  nestedCategories?: NestedCategory[];
};

type NavLink = {
  title: string;
  path: string;
  subCategories?: SubCategory[];
};

// Ορίζουμε τους συνδέσμους πλοήγησης
const servicesLinks = {
  title: 'Διπλώματα',
  path: '/services',
  subCategories: [
    { 
      title: 'Μοτοσυκλέτες', 
      path: '/services/moto', 
      nestedCategories: [
        { title: 'ΑΜ', path: '/services/am' },
        { title: 'Α1', path: '/services/a1' },
        { title: 'Α2', path: '/services/a2' },
        { title: 'Α', path: '/services/a' },
      ],
    },
    { 
      title: 'Αυτοκίνητο', 
      path: '/services/car', 
      nestedCategories: [
        { title: 'Β', path: '/services/b' },
        { title: 'ΒΕ', path: '/services/be' },
      ],
    },
    { 
      title: 'Επαγγελματικά', 
      path: '/services/pro', 
      nestedCategories: [
        { title: 'C', path: '/services/c' },
        { title: 'D', path: '/services/d' },
        { title: 'CE', path: '/services/ce' },
      ],
    },
  ],
};
const navLinks:NavLink[] = [
  { title: 'Αρχική', path: '/' },
  { title: 'Η Σχολή μας', path: '/about' },
  servicesLinks,
  { title: 'Επικοινωνία', path: '/contact' },
];

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* Εδώ θα μπει το λογότυπο της σχολής */}
        🚗 Σχολή Οδηγών
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          {navLinks.map((item, index) => (
            <li key={index} className="nav-item">
              {item.subCategories ? (
                // Αν είναι το "Διπλώματα" (Dropdown)
                <div className="dropdown-menu-wrapper">
                  <Link to={item.path} className="nav-link-main">{item.title}</Link>

                  <ul className="dropdown-content level-1">
                    {item.subCategories.map((sub, subIndex) => (
                      <li key={subIndex} className="dropdown-item-level-1">
                        {/* Ελέγχουμε για το δεύτερο επίπεδο (ΑΜ, Β, C) */}
                     
                        <Link to={sub.path}>{sub.title}</Link>
                        {sub.nestedCategories && (
                          <ul className="dropdown-content level-2">
                            {sub.nestedCategories.map((nested, nestedIndex) => (
                              <li key={nestedIndex} className="dropdown-item-level-2">
                                <Link to={nested.path}>{nested.title}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                // Αν είναι απλό link (Αρχική, Σχολή, Επικοινωνία)
                <Link to={item.path}>{item.title}</Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;