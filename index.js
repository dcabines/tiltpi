const os = require('os');
const express = require('express');
const app = express();

const info = {
  eol: os.EOL,
  arch: os.arch(),
  constants: os.constants,
  cpus: os.cpus(),
  freemem: os.freemem(),
  homedir: os.homedir(),
  hostname: os.hostname()
};

app.get('/', (req, res) => res.send('Welcome to tilt.local'));

app.get('/os', (req, res) => res.send(info));

app.listen(80, () => console.log('listening on port 80'));