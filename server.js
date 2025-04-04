const express = require('express');
//const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, Images)
app.use(express.static('public'));

// Routes to render EJS files
app.get('/', (req, res) => {
    res.render('ticketron');
});

app.get('/bus', (req, res) => {
    res.render('bus');
});

app.get('/train', (req, res) => {
    res.render('train');
});

app.get('/movie', (req, res) => {
    res.render('movie');
});

app.get('/payment', (req, res) => {
    res.render('payment');
});

app.get('/tickets', (req, res) => {
    res.render('tickets');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});