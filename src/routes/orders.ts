import { Response, Request, Router } from 'express';
import { database } from '../../config/database';
import { Auth } from '../middleware/auth';


export const Orders: Router = Router();

Orders.get('/:id', Auth, async (req: Request, res: Response) => {
    const user_id = parseInt(req.params.id);
    database.query(`SELECT * FROM orders WHERE user_id = $1`, [user_id], (error, orders) => {
        if (error) {
            console.log(error);
            res.status(500).send('Server error');
        } else {
            res.json(orders.rows);
        }
    });
})