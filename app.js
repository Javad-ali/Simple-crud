const express = require('express');
const mongoose = require('mongoose');
const dbConnection = require('./config/dbConnection');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 8080
const userRoute = require('./routes/userRoute')
dbConnection()

const app = express()
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',userRoute)


app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})