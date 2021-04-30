import { database } from '../../config/database';
export class OrderStore {
    async all(id:Number): Promise<object> {
        let result;
        result = database.query(`SELECT * FROM orders WHERE id = $1`, [id]);
        return result.rows;
    }
}