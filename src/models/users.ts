import { database } from '../../config/database';
import bcrypt from 'bcrypt';

export class UserStore {
    async all(): Promise<any> {
        database.query(`SELECT * FROM users`, (error, user) => {
            if (error) {
                throw new Error(`Product not found`)
            } else {
                return user.rows
            }
        });
    }

    async getProductById(id: Number): Promise<any> {
        database.query(`SELECT * FROM users WHERE id = $1`, [id], (error, user) => {
            if (error) {
                throw new Error(`Product not found`)
            } else {
                return user.rows;
            }
        });
    }

    async create(firstname: any, lastname: any, password:any): Promise<any> {
        if (firstname === undefined || lastname === undefined || password === undefined) {
            throw new Error(`Product not found`)
        } else {
            const newpassword = await bcrypt.hashSync(password, 5);
    
            database.query(`INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`,
                [firstname, lastname, newpassword], (error, user) => {
                    if (error) {
                        throw new Error(`Product not found`)
                    } else {
                        return { msg: 'User Created' };
                    }
                });
        }
    }
}