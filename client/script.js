const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Statik dosyaları sunma
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.urlencoded({ extended: false }));

// Ana sayfa
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// Kayıt işlemi
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  console.log('Kullanıcı Adı:', username);
  console.log('E-posta:', email);
  console.log('Şifre:', password);
  res.send('Kayıt başarılı!');
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor...`);
});
const user = localStorage.getItem("username");
document.querySelector("h1").innerText = `Hoş geldin, ${user}`;
