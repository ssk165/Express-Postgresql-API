import { database } from '../../config/database';
import { Products } from '../types/Product';

export class ProductStore {
    async all(): Promise<Products[]> {
        let result;
        result = await database.query(`SELECT * FROM products`);
        return result.rows;
    }

    async getProductById(id: Number): Promise<Products[]> {
        let result;
        result = await database.query(`SELECT * FROM products WHERE id = $1`, [id]);
        console.log(result);
        return result.rows;
    }

    async create(name: Text, price: Number): Promise<Products[]> {
        let result;
        if (name === undefined || price === undefined) {
            throw new Error(`Error Occurred`);
        } else {
            result = await database.query(`INSERT INTO products (name, price) VALUES($1, $2) RETURNING *`,
                [name, price]);
        }
        return result.rows;
    }
}