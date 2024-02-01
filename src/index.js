import express from 'express'
import connectDB from './db/db.js';
import dotenv from 'dotenv'
const app=express();

// require('dotenv').config({
//     path:'./.env'
//})

dotenv.config({
    path:'./.env',
});

connectDB().then(()=>{
    app.on("error",(err)=>{
        console.log(`Error occured ${err}`);
        throw err;
    })
    app.listen(process.env.PORT || 7000,()=>{
        console.log(`Server running on port ${process.env.PORT||"7000"}`);
    })
}).
catch((error)=>{
    console.log(error);
});