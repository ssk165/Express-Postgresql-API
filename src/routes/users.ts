import { Response, Request, Router } from 'express';
import { database } from '../../config/database';
import { Auth } from '../middleware/auth';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const Users: Router = Router();

Users.post('/', Auth, async (req: Request, res: Response) => {

    const { firstname, lastname, password } = req.body;
    console.log(req.body);
    if (firstname === undefined || lastname === undefined || password === undefined) {
        res.send('Provide all the details');
    } else {
        const newpassword = await bcrypt.hashSync(password, 5);

        database.query(`INSERT INTO users (firstName, lastName, password) VALUES($1, $2, $3) RETURNING *`,
            [firstname, lastname, newpassword], (error, user) => {
                if (error) {
                    res.status(500).send('Server error');
                } else {
                    res.json({ msg: 'User Created' });
                }
            });
    }
})

Users.get('/generatetoken', async (req: Request, res: Response) => {
    try {
        const payload = {
            user: '1'
        };
        jwt.sign(
            payload,
            `${process.env.JWTSECRET}`,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        res.status(500).send('Server error');
    }

})

Users.get('/all', Auth, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`SELECT * FROM users`, (error, user) => {
        if (error) {
            res.status(500).send('Server error');
        } else {
            res.json(user.rows);
        }
    });
})

Users.get('/:id', Auth, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    database.query(`SELECT * FROM users WHERE id = $1`, [id], (error, user) => {
        if (error) {
            res.status(500).send('Server error');
        } else {
            res.json(user.rows);
        }
    });
})

