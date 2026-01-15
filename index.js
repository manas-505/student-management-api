const express=require('express');
const app=express();

const db=require('./config/db');
//import models
const studentModel=require('./models/studentModel');
app.use(express.json());

const studentRouter=require('./routes/studentRouter');
const { FORCE } = require('sequelize/lib/index-hints');
app.use('/students',studentRouter);



db.sync({force:true}).then(()=>{
    app.listen(3000,()=>{
    console.log("Server is running.....");
})
}).catch(()=>{
    console.log(console.error() )
});