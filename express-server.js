const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// routes
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

// simple health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Express server listening at http://localhost:${PORT}`);
});