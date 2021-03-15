import { Response, Request, Router } from 'express';
import { database } from '../../config/database';
import { OrderStore } from '../models/orders'
import { Auth } from '../middleware/auth';


export const Orders: Router = Router();
const store = new OrderStore();

Orders.get('/:id', Auth, async (req: Request, res: Response) => {
    const user_id = parseInt(req.params.id);
    try {
        const products = await store.all(user_id);
        res.json(products);
      } catch(err) {
        res.status(400)
        res.json(err)
    }
})