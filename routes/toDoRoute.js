const express= require('express');
const toDoController = require(`./../controllers/toDoController`);
const router = express.Router();
const app = express();


router.route('/').get(toDoController.getAllToDo)


