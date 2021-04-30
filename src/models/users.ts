import { database } from '../../config/database';
import bcrypt from 'bcrypt';

export class UserStore {
    async all(): Promise<object> {
        let result;
        result = await database.query(`SELECT * FROM users`);
        console.log(result);
        return result.rows;
    }

    async getProductById(id: Number): Promise<object> {
        let result;
        result = await database.query(`SELECT * FROM users WHERE id = $1`,[id]);
        return result.rows;
    }

    async create(firstname: Text, lastname: Text, password: Text): Promise<object> {
        let result;
        if (firstname === undefined || lastname === undefined || password === undefined) {
            throw new Error(`Product not found`)
        } else {
            const newpassword = await bcrypt.hashSync(password, parseInt(`${process.env.SALTROUND}`));

            
            result = await database.query(`INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`,
                [firstname, lastname, newpassword]);
        }

        return result.rows;
    }
}