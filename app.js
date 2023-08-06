const dbConnect = require("./config/database");
dbConnect();//connect db first

require("dotenv").config();
const express = require("express");

// config app here
const app = express();
app.use(express.json());
// config all the routers here
const userRouter = require('./router/user');
app.use('/users', userRouter);

module.exports = app;

