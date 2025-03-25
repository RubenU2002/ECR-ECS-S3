const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Environment variable value: ${process.env.MSJ}`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});