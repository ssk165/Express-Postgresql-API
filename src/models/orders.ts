import { database } from '../../config/database';
export class OrderStore {
    async all(id:any): Promise<any> {
        database.query(`SELECT * FROM orders WHERE id = $1`, [id], (error, orders) => {
            if (error) {
                console.log(error);
                throw new Error(`Product not found`)
            } else {
                return orders.rows;
            }
        });
    }
}