import { Response, Request, Router } from 'express';
import { database } from '../../config/database';
import bcrypt from 'bcrypt';


export const Orders: Router = Router();

Orders.get('/all', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`SELECT * FROM users`, (error, user) => {
        if (error) {
            res.send(error.toString())
        } else {
            res.json(user.rows);
        }
    });
})
