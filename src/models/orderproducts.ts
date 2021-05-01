import { database } from '../../config/database';
import { OrderProduct } from '../types/OrderProduct';

export class OrderProducts {
    async create(order_id: Number, product_id: Number,quantity:Number): Promise<OrderProduct[]> {
        let result;
        if (order_id === undefined || product_id === undefined || quantity === undefined) {
            throw new Error(`Error Occurred`);
        } else {
            result = await database.query(`INSERT INTO ordersproducts (order_id, product_id, quantity) VALUES($1, $2) RETURNING *`,
                [order_id, product_id, quantity]);
        }
        return result.rows;
    }
}