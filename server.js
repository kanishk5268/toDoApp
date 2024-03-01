const dotenv = require('dotenv');
const mongoose = require('mongoose');


//Uncaught Exception logic.
process.on('uncaughtException', err=>{
    console.log('UNHANDLED EXCEPTION');
    console.log(err.name, err.message);
    process.exit(1);
})

const app = require(`./app`);
dotenv.config({path:'./config.env'});


const DB = process.env.DATABASE;
mongoose.connect(DB,{
}).then(()=> console.log('DB connection successful'));


//Server

const port = process.env.PORT;
const server = app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});


//Unhandled Rejection logic
process.on('unhandledRejection',err =>{
    console.log('UNHANDLED REJECTION');
    console.log(err.name, err.message);
    server.close(()=>{
        process.exit(1);
    });
});