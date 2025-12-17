// server.js (ΠΙΣΩ ΜΕΡΟΣ ΤΗΣ ΕΦΑΡΜΟΓΗΣ)

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors'); // Για να επιτρέψουμε το React (frontend) να στέλνει αιτήματα

const app = express();
const port = 3001; // Επιλέξτε μια θύρα για τον server
app.get('/', (req, res) => {
    res.send('Ο Server Λειτουργεί!');
});
// Middlewares
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Προσαρμόστε στη διεύθυνση του React frontend σας

// 1. Δημιουργία Transporter (χρησιμοποιεί SMTP, π.χ. Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Μπορείτε να χρησιμοποιήσετε οποιονδήποτε πάροχο (π.χ. Outlook, εταιρικό SMTP)
    auth: {
        user: 'iliasdiskod7@gmail.com', // <-- Βάλτε το δικό σας Email
        pass: 'jhiawzytpccxwskz' // <-- Βάλτε App Password, ΟΧΙ το κανονικό password
    }
});


// 2. Endpoint για την Αποστολή Φόρμας
app.post('/send-contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const mailOptions = {
        from: 'to_email_sas@gmail.com',
        to: 'iliasdiskod7@gmail.com', // <-- Το email που θα λαμβάνει τα στοιχεία
        subject: `Νέα Εγγραφή Ενδιαφέροντος: ${name}`,
        html: `
            <h3>Νέο Αίτημα Επικοινωνίας από Ιστοσελίδα</h3>
            <p><b>Όνομα:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Τηλέφωνο:</b> ${phone}</p>
            <p><b>Ενδιαφέρον:</b> ${subject}</p>
            <p><b>Μήνυμα:</b> ${message}</p>
        `,
    };
    const mailToClient = {
        from: 'to_email_sas@gmail.com',
        to: email, // <-- Ο παραλήπτης είναι το email που έβαλε στη φόρμα
        subject: '✅ Επιβεβαίωση Αίτησης - Σχολή Οδηγών RED',
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2>Αγαπητέ/ή ${name},</h2>
                <p>Σας ευχαριστούμε πολύ για το ενδιαφέρον σας. Το αίτημά σας παραλήφθηκε επιτυχώς.</p>
                
                <h3 style="color: #30a5cc;">Τι να περιμένετε τώρα:</h3>
                <ul>
                    <li>Θα επικοινωνήσουμε άμεσα μαζί σας, εντός των επόμενων 24 ωρών, για να σας δώσουμε όλες τις λεπτομέρειες για το δίπλωμα ${subject}.</li>
                    <li>Για επείγοντα ζητήματα, μπορείτε να μας καλέσετε στο +30 2310 123456.</li>
                </ul>
                
                <p>Με εκτίμηση,</p>
                <p>Η ομάδα της Σχολής Οδηγών RED.</p>
                <hr style="border: 1px solid #eee;">
                <p style="font-size: 0.8em; color: #777;">Αυτό είναι ένα αυτοματοποιημένο μήνυμα, παρακαλούμε μην απαντήσετε απευθείας.</p>
            </div>
        `,
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Σφάλμα αποστολής προς Σχολή:", error);
            return res.status(500).json({ success: false, message: 'Αποτυχία αποστολής email στη Σχολή.' });
        }
        
        // Αν το πρώτο email εστάλη επιτυχώς, στέλνουμε το δεύτερο (προς τον Πελάτη)
        transporter.sendMail(mailToClient, (errorClient, infoClient) => {
            if (errorClient) {
                console.error("Σφάλμα αποστολής προς Πελάτη:", errorClient);
                // Αν αποτύχει το δεύτερο, επιστρέφουμε 500
                return res.status(500).json({ success: false, message: 'Αποτυχία αποστολής επιβεβαίωσης στον πελάτη.' });
            }
            
            console.log('Emails sent successfully.');
            res.status(200).json({ success: true, message: 'Τα μηνύματα εστάλησαν επιτυχώς!' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});