import { database } from '../../config/database';
export class ProductStore {
    async all(): Promise<any> {
        database.query(`SELECT * FROM products`, (error, products) => {
            if (error) {
                console.log(error);
                throw new Error(`Product not found`)
            } else {
                return products.rows;
            }
        });
    }

    async getProductById(id: Number): Promise<any> {
        database.query(`SELECT * FROM products WHERE id = $1`, [id], (error, products) => {
            if (error) {
                console.log(error);
                throw new Error(`Product not found`)
            } else {
                return products.rows;
            }
        });
    }

    async create(name: any, price: any): Promise<any> {
        if (name === undefined || price === undefined) {
            throw new Error(`Error Occurred`);
        } else {
            database.query(`INSERT INTO products (name, price) VALUES($1, $2) RETURNING *`,
                [name, price], (error, product) => {
                    if (error) {
                        throw new Error(`Error Occurred`);
                    } else {
                        return product;
                    }
                });
        }
    }
}