const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!', status: 'Success' });
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});