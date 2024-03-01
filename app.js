const express = require('express');
const app = express();

const AppError = require(`./utils/appError`);
const toDoRouter = require(`./routes/toDoRoute`);
app.use(express.json());
//Route Implementation

app.use('/api/v1/toDo',toDoRouter);

app.all("*",(req,res,next)=>{
    next(new AppError(`Can't find ${req.originalUrl} on this server!`,404));
});


module.exports = app