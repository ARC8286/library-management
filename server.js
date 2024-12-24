const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config;
const PORT = process.env.PORT || 8800;
const bodyparser = require('body-parser');
app.use(bodyparser.json());
const logrequest = (req,res,next)=>{
    console.log(`${[new Date().toLocaleString()]}: request made to ${ req.originalUrl}`);
next();
}
app.use(logrequest);

app.get('/library',(req,res)=>{

res.send('welcome to library');
})
const booksrouter = require('./routes/booksroutes');
app.use('/books',booksrouter);

const authorroutes = require('./routes/authorroutes');
app.use('/author',authorroutes)


app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
})