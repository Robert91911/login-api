import {Router} from 'express';
import routes from '.';
import AuthController from '../controller/AuthController'
import { checkJwt } from "./../middlewares/jwt"

const router = Router();


//login
router.post('/login', AuthController.login);


//Chande password
router.post('/change-password', [checkJwt], AuthController.changePassword);

export default router;