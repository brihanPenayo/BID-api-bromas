const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 8000;
require('./config/jokes.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/jokes.routes')(app);
app.listen(puerto, () => {
    console.log(`Listening at Port ${puerto}`)
})