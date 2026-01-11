const { error } = require('console');
const db=require('../config/db');

//INSERT
exports.addStudent=(req,res)=>{
    const {name,email,age}=req.body;

    const query=`INSERT INTO students (name,email,age) VALUES(?,?,?)`;
    db.execute(query,[name,email,age],(err,result)=>{
        if(err){
            console.error("Error in data adding.",err);
            return res.status(500).json(err);
        }
        console.log("Student inserted.",result.resultId);
        res.status(201).json ("Student addd")
    })
}


//GET ALL 
exports.getAllStudent=(req,res)=>{
    const query=`SELECT * FROM students`;
    db.execute(query,(err,result)=>{
        if(err){
            console.error("Fetch error",err);
            return res.status(500).json(err);
        }
        res.json(result);
    });
};


//GET BY ID
exports.getStudentById=(req,res)=>{
    const id=req.params.id;
    const query=`SELECT *FROM students where id=?`;

    db.execute(query,[id],(err,result)=>{
        if(err){
            return res.status(500).json(err);
        }

        if(result.length===0){
            return res.status(404).json({message:"Student not found."});
        }

        res.json(result[0]);
    });
};


//UPDATE
exports.updateStudent=(req,res)=>{
    const id=req.params.id;
    const {name,email}=req.body;

    const query=`UPDATE students SET name=?,email=? where id=?`;

    db.execute(query,[name,email,id],(err,result)=>{
        if(err){
            console.error("Update error",err);
            return res.status(500).json(err);
        }
        if(result.affectedRows===0){
            return res.status(404).json({message:"Student not Found"});
        }

        console.log("Student Updated",id);
        res.json({message:"student updated"});
    });
};


//DELETE
exports.deleteStudent=(req,res)=>{
    const id=req.params.id;
    const query=`DELETE FROM students WHERE id=?`;

    db.execute(query,[id],(err,result)=>{
        if(err){
            console.error("Delete Error",err);
            return res.status(500).json(err);
        }
        if(result.affectedRows===0){
            return res.status(404).json({message:"Student not fount."});
        }

        console.log("Student deleted:",id);
        res.json({message:"Student deleted"});
    });
};