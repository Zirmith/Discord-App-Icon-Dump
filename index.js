const express = require('express');
const session = require('express-session');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3002;
const fs = require('fs')
// Use CORS to allow cross-origin requests (adjust origin as needed)
app.use(cors());

// Middleware for session handling
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Read the icons JSON file
const iconsData = JSON.parse(fs.readFileSync('icons.json'));

app.get('/data/:key', (req, res) => {
  const { key } = req.params;
  if (iconsData[key]) {
    res.json({key:iconsData[key]});
  } else {
    res.status(404).send('Key not found in the database.');
  }
});

app.get("/data", (req, res) => {
  res.send(res.json(iconsData))
})

// Start your Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
