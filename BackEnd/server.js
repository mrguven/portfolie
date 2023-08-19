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


db.connect((err)=> {
  if (err){throw err}  ;
  console.log('connected');
  con.query(sql,(err,result)=>{
    if (err){
      throw err;
      console.log(result);
    }
  })
});

app.use(express.urlencoded({extended:true}));


app.listen(4000, ()=>{
    console.log('connected the server');
})