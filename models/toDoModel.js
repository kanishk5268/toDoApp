const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true,
        minlength: 3,
        maxlength: 128
    },
    body:{
        type:String,
        required: true,
        maxlength: 500
    },
    comments:{
        type:String,
        maxlength: 50 
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'low'
    }
})


const ToDo = mongoose.model('ToDo',toDoSchema);

module.exports = ToDo;