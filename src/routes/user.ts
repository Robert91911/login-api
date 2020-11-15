import { Router } from 'express';
import { UserController } from './../controller/UserController';
import { checkJwt } from './../middlewares/jwt';
import { checkRole } from "./../middlewares/role";

const router = Router();

//Get all users
router.get('/',[checkJwt], UserController.getAll);

//Get one user
router.get('/:id',[checkJwt], UserController.getById);

//Create a user
router.post('/',[checkJwt, checkRole(['admin'])], UserController.newUser);

//Edit user
router.patch('/:id',[checkJwt], UserController.editUser);

//Delete
router.delete('/:id',[checkJwt], UserController.deleteUser);


export default router;