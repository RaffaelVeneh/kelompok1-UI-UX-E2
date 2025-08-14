// 1. Impor library yang dibutuhkan
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001; // port 3001 untuk server

app.use(cors()); // Mengizinkan permintaan dari origin lain (React app)
app.use(express.json()); // Memungkinkan server membaca data JSON yang dikirim

app.get('/', (req, res) => {
  res.json({ message: "Halo dari server! Semuanya bekerja dengan baik." });
});

app.listen(PORT, () => {
  console.log(`Server berhasil berjalan di http://localhost:${PORT}`);
});