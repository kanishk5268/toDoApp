const express= require('express');
const toDoController = require(`./../controllers/toDoController`);
const router = express.Router();
const app = express();


router.route('/').get(toDoController.getAllToDo);
router.route('/create').post(toDoController.createToDo);
router.route('/update/:id').patch(toDoController.updateToDo);
router.route('/delete/:id').delete(toDoController.deleteToDo);

module.exports = router;

