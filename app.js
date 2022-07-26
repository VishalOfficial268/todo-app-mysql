require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/user');
const app = express();
const PORT = process.env.APP_PORT || 5100;
require('./config/db-config');

app.use(cors());
app.use(express.json())
app.use(morgan('dev'));
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send("Todo Rest API in MySql + JWT + NodeJs + Express");
})
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
})