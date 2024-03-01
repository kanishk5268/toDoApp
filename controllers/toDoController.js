const ToDo = require(`./../models/toDoModel`);
const catchAsync = require(`./../utils/catchAsync`);
const AppError = require('./../utils/appError');

exports.getAllToDo = catchAsync(async(req,res,next)=>{
    
    const toDos = await ToDo.find();
    res.status(200).json({
        status:'success',
        results: toDos.length,
        data:{
            toDos
        }
    })
});


exports.createToDo = catchAsync(async(req,res,next)=>{
    const newToDo = await ToDo.create(req.body);
    res.status(201).json({
        status:'success',
        data:{
            newToDo
        }
    })
})


exports.updateToDo = catchAsync(async(req,res,next)=>{
    const toDo = await ToDo.findByIdAndUpdate(
        req.params.id
        ,req.body,
        {
            new:true,
        }
    );
    if(!toDo){
        return next(new AppError('No tour found with that ID',404));
    }

    res.status(200).json({
        status:'success',
        data:{
            toDo
        }
    });
});

exports.deleteToDo = catchAsync(async(req,res,next)=>{
    const toDo = await ToDo.findByIdAndDelete(req.params.id);
    if(!toDo){
        return next(new AppError('No tour found with that ID',404));
    }
    res.status(204).json({
        status:'success',
        data:null
    });
});