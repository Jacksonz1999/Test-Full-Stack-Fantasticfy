import fetch from 'node-fetch';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT


app.use(cors());


app.get('/products', (req, res) => {
  const url = process.env.SHOPIFY_URL;
  console.log(`URL: ${url}`);
  fetch(url, {
    method: "GET",
    headers: {
      "X-Shopify-Access-Token": process.env.SHOPIFY_ACCESS_TOKEN,
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    res.send(data);
  })
  .catch(error => {
    res.send(error);
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

