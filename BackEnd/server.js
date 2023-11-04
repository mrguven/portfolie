const express=require('express');
var cors = require('cors')
const mySql= require('mysql');

const app= express();
const rout=require('./routes/route')

app.use(cors({
  "origin": [3000],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
  }))
const dotenv=require('dotenv').config();
app.use(rout)
// const db=mySql.createConnection({
//     host     : 'localhost',
//   user     : 'me',
//   password : 'secret',
//   database : 'my_db'
// });


// db.connect((err)=> {
//   if (err){throw err}  ;
//   console.log('connected');
//   db.query(sql,(err,result)=>{
//     if (err){
//       throw err;
//       console.log(result);
//     }
//   })
// });



app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(3030, ()=>{
    console.log('connected the server');
})