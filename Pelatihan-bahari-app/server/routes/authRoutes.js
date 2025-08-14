const express = require('express');
const router = express.Router();

// Endpoint: POST /api/auth/login
router.post('/login', (req, res) => {
  // Logic untuk login akan ada di sini
  res.json({ message: "Placeholder untuk proses login" });
});

// Endpoint: POST /api/auth/register
router.post('/register', (req, res) => {
  // Logic untuk register akan ada di sini
  res.json({ message: "Placeholder untuk proses registrasi" });
});

module.exports = router;