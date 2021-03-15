import { Response, Request, Router } from 'express';
import { database } from '../../config/database';
import { ProductStore } from '../models/products'
import { Auth } from '../middleware/auth';


export const Products: Router = Router();
const store = new ProductStore();

Products.get('/all', Auth, async (req: Request, res: Response) => {
    try {
        const products = await store.all();
        res.json(products);
      } catch(err) {
        res.status(400)
        res.json(err)
    }
})

Products.get('/:id', Auth, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const products = await store.getProductById(id);
        res.json(products);
      } catch(err) {
        res.status(400)
        res.json(err)
    }
})


Products.post('/', Auth, async (req: Request, res: Response) => {
    const { name, price } = req.body;
    try {
        const products = await store.create(name,price);
        res.json(products);
      } catch(err) {
        res.status(400)
        res.json(err)
    } 
})
