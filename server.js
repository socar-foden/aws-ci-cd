const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(8080, () => {
  console.log(`Server listening on http://localhost:${8080}`);
});
