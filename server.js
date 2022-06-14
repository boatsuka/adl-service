const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'hello world.' });
});

app.listen(port, () => {
    console.log(`start server to port: http://localhost:${port}`);
});
