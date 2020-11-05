import { Router } from 'express';
import { User } from '../entity/User';
import { UserController } from './../controller/UserController';
import { checkJwt } from './../middlewares/jwt';

const router = Router();

//Get all users
router.get('/',[checkJwt], UserController.getAll);

//Get one user
router.get('/:id', UserController.getById);

//Create a user
router.post('/', UserController.newUser);

//Edit user
router.patch('/:id', UserController.editUser);

//Delete
router.delete('/:id', UserController.deleteUser);


export default router;