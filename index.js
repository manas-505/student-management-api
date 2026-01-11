const express=require('express');
const app=express();

app.use(express.json());

const studentRouter=require('./routes/studentRouter');
app.use('/students',studentRouter);

app.listen(3000,()=>{
    console.log("Server is running.....");
})