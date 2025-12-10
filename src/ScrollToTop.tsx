// src/components/ScrollToTop/ScrollToTop.tsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
    // Παρακολουθεί την αλλαγή του URL (pathname)
    const { pathname } = useLocation();

    useEffect(() => {
        // Μετακινεί το παράθυρο στην κορυφή (top: 0, left: 0)
        window.scrollTo(0, 0);
        document.body.classList.add('flash-active');
        const timer = setTimeout(() => {
            document.body.classList.remove('flash-active');
        }, 100);
        return () => {
             // Επίσης, αν το component αφαιρεθεί, διασφαλίζουμε ότι η κλάση αφαιρείται
             document.body.classList.remove('flash-active');
             clearTimeout(timer);
        }
    }, [pathname]); // Ενεργοποιείται κάθε φορά που αλλάζει το pathname
    useEffect(() => {
        // 2. Απενεργοποίηση scroll restoration του BROWSER
        // (Αυτή η εντολή πρέπει να τρέχει μία φορά κατά την αρχική φόρτωση)
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'; // Ελέγχουμε εμείς το scroll
        }
        
        // 3. Εξαναγκασμός scroll to top (για Refresh)
        window.onload = () => {
             window.scrollTo(0, 0);
        };

    }, []); // Τρέχει μόνο μία φορά κατά την προσάρτηση (mounting)

    // Δεν αποδίδει τίποτα στο DOM
    return null;
};

export default ScrollToTop;