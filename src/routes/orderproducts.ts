import { Response, Request, Router } from 'express';
import { database } from '../../config/database';
import { OrderProducts } from '../models/orderproducts'
import { Auth } from '../middleware/auth';


export const OrderProduct: Router = Router();
const store = new OrderProducts();


OrderProduct.post('/', Auth, async (req: Request, res: Response) => {
    const {order_id,product_id,quantity} = req.body;
    try {
        const products = await store.create(order_id,product_id,quantity);
        res.json(products);
      } catch(err) {
        res.status(400)
        res.json(err)
    } 
})
