// src/pages/Home.tsx (Προσθήκη της νέας ενότητας)
import HeroSlider from './HeroSlider';
import { Link } from 'react-router-dom';
// ... (άλλα imports) ...
import './Home.css'; // Θα χρειαστούμε styling
import { useInView } from './useInview';


// Δεδομένα για τα 4 πλεονεκτήματα
// src/pages/Home.tsx (Προσθήκη στοιχείων κριτικών)
const diplomaCategories = [
  {
    title: 'Μοτοσυκλέτες',
    subtitle: 'Δίπλωμα ΑΜ, Α1, Α2, Α',
    description: 'Αποκτήστε την ελευθερία της κίνησης με ασφάλεια. Εκπαίδευση για όλες τις κατηγορίες δικύκλων.',
    image: '/photos/motocycle.jpg', // Πρέπει να υπάρχει
    path: '/services/moto',
  },
  {
    title: 'Αυτοκίνητο',
    subtitle: 'Δίπλωμα Β, ΒΕ',
    description: 'Ξεκινήστε την οδήγηση με αυτοπεποίθηση. Μαθήματα για αρχάριους και επέκταση για ρυμουλκούμενα.',
    image: '/photos/car7.jpg', // Πρέπει να υπάρχει
    path: '/services/car',
  },
  {
    title: 'Επαγγελματικά',
    subtitle: 'Δίπλωμα C, D, CE',
    description: 'Επαγγελματική κατάρτιση για φορτηγά, λεωφορεία και νταλίκες. Εξασφαλίστε την καριέρα σας.',
    image: '/photos/truck.jpg', // Πρέπει να υπάρχει
    path: '/services/pro',
  },
];
const testimonials = [
  {
    quote: "Η καλύτερη εμπειρία! Οι εκπαιδευτές είναι επαγγελματίες και με βοήθησαν να κερδίσω αυτοπεποίθηση από το πρώτο μάθημα.",
    name: "Άννα Π.",
    rating: 5,
  },
  {
    quote: "Πολύ σύγχρονος στόλος οχημάτων και το θεωρητικό μάθημα ήταν κατανοητό και ευχάριστο. Συνιστώ ανεπιφύλακτα!",
    name: "Γιώργος Κ.",
    rating: 5,
  },
  {
    quote: "Χάρη στη Σχολή RED πέρασα τις εξετάσεις με την πρώτη! Η προσοχή στη λεπτομέρεια κάνει τη διαφορά.",
    name: "Ελένη Μ.",
    rating: 5,
  },
];
const features = [
  { 
    title: 'Πιστοποιημένες Υπηρεσίες', 
    text: 'Με γνώμονα την οδική ασφάλεια και την ενημέρωση του νέου οδηγού.',
    icon: '✔' 
  },
  { 
    title: 'Σύγχρονες Πρακτικές', 
    text: 'Με σύγχρονες πρακτικές, προσαρμοσμένες στην οδηγική εμπειρία του εκπαιδευόμενου.',
    icon: '📚' 
  },
  { 
    title: 'Σύγχρονα οχήματα', 
    text: 'Η σχολή μας διαθέτει σύγχρονα οχήματα για την ασφαλή εκπαίδευση των νέων οδηγών.',
    icon: '🚗' 
  },
  { 
    title: 'Πλήρης Κατάρτιση', 
    text: 'Οι εκπαιδευτές μας διαθέτουν γνώση, εμπειρία και επαγγελματισμό.',
    icon: '⭐' 
  },
];

const Home: React.FC = () => {
  const {ref:chooseUsRef, inView: chooseUsInView}=useInView();
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView();
  const{ref: diplomaRef, inView: diplomaInView}=useInView();
  return (
    <div>
     <HeroSlider/>
     
      
      {/* 2. ΓΙΑΤΙ ΝΑ ΜΑΣ ΕΠΙΛΕΞΕΤΕ; */}
      <section 
      className={`why-choose-us-section ${chooseUsInView ? 'is-visible' : ''}`}
        ref={chooseUsRef}>
        <div className="section-content-wrapper">

          {/* Αριστερό Μέρος: Τίτλος & Τετράγωνα */}
          <div className="left-side-content">
            <p className="subtitle">✅ Εκπαιδεύετε με τους καλύτερους</p>
            <h2>Γιατί να μας επιλέξετε;</h2>

            {/* Τα 4 Πλαίσια με το κείμενο */}
            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-block">
                  <div className="icon-badge">
                    {/* Θα χρησιμοποιήσουμε το γαλάζιο της σχολής */}
                    {feature.icon} 
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Δεξιό Μέρος: Εικόνα */}
          <div className="right-side-image">
            <img src="/photos/car6.jpg" alt="Μοτοσυκλέτες και αυτοκίνητο της σχολής" />
          </div>
        </div>
      </section>
      {/* 4. ΚΑΤΗΓΟΡΙΕΣ ΔΙΠΛΩΜΑΤΟΣ (3 Blocks) */}
      <section  className={`diploma-categories-section ${diplomaInView ? 'is-visible' : ''}`}
        ref={diplomaRef}>
        <div className="page-header">
          <h1>Κατηγορίες Διπλώματος</h1>
          <p>Επιλέξτε την κατηγορία που σας ενδιαφέρει:</p>
        </div>

        <div className="categories-grid">
          {diplomaCategories.map((cat, index) => (
            <div key={index} className="category-card">
              <div className="card-image-wrapper">
                <img src={cat.image} alt={`Δίπλωμα ${cat.title}`} />
              </div>
              <div className="card-content">
                <h3>{cat.title}</h3>
                <p className="subtitle">{cat.subtitle}</p>
                <p>{cat.description}</p>
                <Link to={cat.path} className="card-cta-button">
                  Μάθετε Περισσότερα
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 3. ΚΡΙΤΙΚΕΣ (TESTIMONIALS) */}
      <section className={`testimonials-section ${testimonialsInView ? 'is-visible' : ''}`}
        ref={testimonialsRef}>
        <div className="page-header">
          <h1>Τι είπαν για εμάς 🌟</h1>
        </div>
              
        <div className="testimonials-container">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">
                {/* Εμφάνιση αστεριών: 🌟🌟🌟🌟🌟 */}
                {'⭐'.repeat(t.rating)} 
              </div>
              <p className="quote">{`"${t.quote}"`}</p>
              <p className="author">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FOOTER (Υποθέτουμε ότι το Footer είναι στο App.tsx ή εδώ) */}
      
    </div>
  );
};

export default Home;