import { database } from '../../config/database';
export class OrderProducts {
    async create(order_id: any, product_id: any,quantity:any): Promise<any> {
        if (order_id === undefined || product_id === undefined || quantity === undefined) {
            throw new Error(`Error Occurred`);
        } else {
            database.query(`INSERT INTO ordersproducts (order_id, product_id, quantity) VALUES($1, $2) RETURNING *`,
                [order_id, product_id, quantity], (error, product) => {
                    if (error) {
                        throw new Error(`Error Occurred`);
                    } else {
                        return product;
                    }
                });
        }
    }
}