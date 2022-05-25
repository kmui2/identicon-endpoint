import express from 'express';
import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
import http from 'https';
import Identicon from 'identicon.js';


const PORT = 8080;


const app = express();
app.use(morgan('combined'));

app.use(express.json())

app.get<void, string, string>('/', async (req, res) => {
  res.send('Hello World');
});

app.post<void, string, { hash: string }>('/', async (req, res) => {
  console.log(req.body);

  const hash = req.body.hash;
  console.log('hash:', hash);

  const data = new Identicon(hash, 420).toString()

  res.send('<img width=420 height=420 src="data:image/png;base64,' + data + '">');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));