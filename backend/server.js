const express = require('express');
const connectdb = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

connectdb();

app.use('/tour', require('./routertour'));
const PORT =5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});