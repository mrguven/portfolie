const express=require('express');

const mySql= require('mysql');

const app= express();


app.listen(4000, ()=>{
    console.log('connected the server');
})