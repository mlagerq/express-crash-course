//
const express = require('express');

const app = express();

//establish route
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

//runs on localhost:5000 or other specified server
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Server started on port ${PORT}'));