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

app.get<{ hash: string }, string, string>('/:hash', async (req, res) => {

  const hash = req.params.hash;
  console.log('hash:', hash);

  const data = new Identicon(hash, 420).toString()

  res.send('<img width=420 height=420 src="data:image/png;base64,' + data + '">');
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));