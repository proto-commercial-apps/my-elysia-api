import { db } from '../db';
import bcrypt from 'bcrypt';

export const createUser = async (username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return { id: result.insertId, username };
};

export const authenticateUser = async (username: string, password: string) => {
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) return null;

    const user = rows[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return null;

    return user;
};
