const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 5100;
require('./config/db-config');

app.use(cors());
app.use(express.json())
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("Todo Rest API in MySql + JWT + NodeJs + Express");
})
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})