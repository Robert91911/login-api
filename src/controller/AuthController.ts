import {getRepository} from 'typeorm';
import {Request, Response} from 'express';
import {User} from '../entity/User';1


class AuthController {
    static login = async (req: Request, res: Response)=> {
        const {username, password} = req.body;

        if( !(username && password)) {
            return res.status(400).json({ message: 'Username and Password are required!' })
        }

        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({ where:{username: username}});
        }
        catch{
            return res.status(400).json({message:' Username or password incorrect!'})
        }

        res.send(user);

    }
}

export default AuthController;