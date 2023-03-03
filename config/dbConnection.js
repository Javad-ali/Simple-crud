const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/user-crud"

const dbConnection = async ()=>{
    try {
        mongoose.connect(url)
        console.log('Db connected');
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnection;