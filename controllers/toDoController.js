const ToDo = require(`./../models/toDoModel`);
const catchAsync = require(`./../utils/catchAsync`);


// exports.getAllToDo = catchAsync(async(req,res,next)=>{
    
//     // const toDo = await 
// });


exports.createToDo = catchAsync(async(req,res,next)=>{
    const newToDo = await ToDo.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            newToDo
        }
    })
})