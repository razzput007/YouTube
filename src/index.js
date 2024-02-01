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

connectDB();