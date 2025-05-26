const express = require('express');
const app = express();
const port = 3000;

const db = require('./db'); // Wczytanie puli połączeń

app.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.send(`Połączenie z bazą działa! Czas bazy: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd połączenia z bazą danych');
  }
});
app.get('/sprzet', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM sprzet ORDER BY id');
    res.json(result.rows); // zwraca dane w formacie JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Błąd przy pobieraniu danych sprzętu');
  }
});

app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
