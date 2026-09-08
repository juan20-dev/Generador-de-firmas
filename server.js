const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static assets from project root
app.use(express.static(__dirname));

// Route root requests to index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route /generador or /generador.html explicitly
app.get('/generador.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'generador.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
