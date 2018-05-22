const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Welcome to tilt.local'));
app.listen(80, () => console.log('listening on port 80'));