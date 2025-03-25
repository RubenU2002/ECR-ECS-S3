const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Se hizo una segunda deploy: ${process.env.MSJ}`);
});
app.get('/daniel', (req, res) => {
    res.send(`Ola mamayema`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});