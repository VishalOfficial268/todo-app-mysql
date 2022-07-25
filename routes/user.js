const __userRouter = require('express').Router();
const userController = require('../controller/user');


//save the users data as signup:
__userRouter.post('/register', userController.signup);

//check the user credentials as login:
__userRouter.post('/login', userController.login);


//exporting the __userRouter:
module.exports = __userRouter;