const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Statik dosyaları sunma (client klasöründeki dosyalar)
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({ extended: false }));

// Ana sayfa (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Üyelik sayfası (signup.html)
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/signup.html'));
});

// Kayıt işlemi (POST ile form verisi)
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log('Kullanıcı Adı:', username);
  console.log('E-posta:', email);
  console.log('Şifre:', password);
  res.send('Kayıt başarılı!');
});

// Sunucu başlatma
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor...`);
});
