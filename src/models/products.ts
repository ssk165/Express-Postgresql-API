import { database } from '../../config/database';
export class ProductStore {
    async all(): Promise<object> {
        let result;
        result = await database.query(`SELECT * FROM products`);
        return result.rows;
    }

    async getProductById(id: Number): Promise<object> {
        let result;
        result = await database.query(`SELECT * FROM products WHERE id = $1`, [id]);
        console.log(result);
        return result.rows;
    }

    async create(name: Text, price: Number): Promise<any> {
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