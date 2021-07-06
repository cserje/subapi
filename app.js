const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/napiarfolyam', async (req, res) => {
  try {
    const response = await axios.get(
      'http://api.napiarfolyam.hu/?bank=granit',
      { headers: { 'Content-Type': 'text/xml' } }
    );
    res.set('Content-Type', 'text/xml');
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send();
  }
});

app.listen(port, () => {
  console.log(`🚀 A szerver elindult: http://localhost:${port}`);
});
