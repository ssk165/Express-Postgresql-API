import { database } from '../../config/database';
import { Order } from '../types/Order';

export class OrderStore {
    async all(id:Number): Promise<Order[]> {
        let result;
        result = database.query(`SELECT * FROM orders WHERE id = $1`, [id]);
        return result.rows;
    }
}