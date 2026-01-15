const {Sequelize,DataType, DataTypes}=require('sequelize');
const sequelize=require('../config/db');

const Students=sequelize.define('Students',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports=Students;