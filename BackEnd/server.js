const express=require('express');

const mySql= require('mysql');

const app= express();

const dotenv=require('dotenv').config();

const db=mySql.createConnection({
    host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});


db.connect();

app.use(express.urlencoded({extended:true}));


app.listen(4000, ()=>{
    console.log('connected the server');
})