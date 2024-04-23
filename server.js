const express = require('express');
const path = require('path');

const api = require('./routes/index.js');

const app = express();

const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);

app.use(express.static('public'));



app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
)

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
