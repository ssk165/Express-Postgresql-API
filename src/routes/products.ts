import { Response, Request, Router } from 'express';
import { database } from '../../config/database';
import { Auth } from '../middleware/auth';


export const Products: Router = Router();

Products.get('/all', Auth, async (req: Request, res: Response) => {
    database.query(`SELECT * FROM products`, (error, products) => {
        if (error) {
            console.log(error);
            res.status(500).send('Server error');
        } else {
            res.json(products.rows);
        }
    });
})

Products.get('/:id', Auth, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`SELECT * FROM products WHERE id = $1`, [id], (error, products) => {
        if (error) {
            console.log(error);
            res.status(500).send('Server error');
        } else {
            res.json(products.rows);
        }
    });
})


Products.post('/', Auth, async (req: Request, res: Response) => {
    const { name, price } = req.body;
    if (name === undefined || price === undefined) {
        res.json({ err: 'Provide all the details' });
    } else {
        database.query(`INSERT INTO products (name, price) VALUES($1, $2) RETURNING *`,
            [name, price], (error, product) => {
                if (error) {
                    res.status(500).send('Server error');
                } else {
                    res.json(product);
                }
            });
    }
})
