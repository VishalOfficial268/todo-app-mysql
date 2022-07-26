const __userRouter = require('express').Router();
const userController = require('../controller/user');


//testing the get request:
__userRouter.get('/get-user-lists', userController.getUsersLists);

//save the users data as signup:
__userRouter.post('/signup', userController.signup);

//check the user credentials as login:
__userRouter.post('/login', userController.login);


//exporting the __userRouter:
module.exports = __userRouter;