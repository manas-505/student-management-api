const mysql=require('mysql2');

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'testDB'
});

db.connect((err)=>{
    if(err){
        console.error("Database failed to connect!",err);
        return;
    }
    console.log("Database connected");

    const studentTable=`
        CREATE TABLE IF NOT EXISTS students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50),
        email VARCHAR(50) UNIQUE,
        age INT
        )
    `;

    db.execute(studentTable,(err)=>{
        if(err){
            console.error("Error creating student table:",err);
        }else{
            console.log("Students table created.");
        }
    })
});

module.exports=db;