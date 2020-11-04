import {Router} from 'express';
import routes from '.';
import AuthController from '../controller/AuthController'


const router = Router();


//login
routes.post('/login', AuthController.login);

export default router;