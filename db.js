const mongoose  = require('mongoose');
require('dotenv').config();
const db_url = process.env.DB_URL;
mongoose.connect(db_url);

const db = mongoose.connection;
db.on('connected',()=>{
    console.log("database connected");
})
db.on('disconnected',()=>{
    console.log("database disconnected");
})
db.on('error',()=>{
    console.log("error in database connected");
})
 
module.exports = db;