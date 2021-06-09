const express = require ('express');
const bodyParser = require ('body-parser');
const userRoutes = require ('./Routes/user.routes');
require ('dotenv').config();
const mongoose = require ('mongoose');
const {DATABASE_URL} = process.env

const index = express();
index.use (bodyParser.json());
index.use (bodyParser.urlencoded());
const {PORT, START_UP_MESSAGE} = process.env//calling environment process
index.listen(PORT, ()=> console.log(`${START_UP_MESSAGE} ${PORT}`));
