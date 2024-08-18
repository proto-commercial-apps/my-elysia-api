import { db } from '../db';

interface Transaction {
    id: number;
    userId: number;
    amount: number;
    type: 'income' | 'expense';
}

export const addTransaction = async (userId: number, amount: number, type: 'income' | 'expense') => {
    const [result] = await db.query('INSERT INTO transactions (user_id, amount, type) VALUES (?, ?, ?)', [userId, amount, type]);
    return { id: result.insertId, userId, amount, type };
};

export const getTransactions = async (userId: number) => {
    const [rows] = await db.query('SELECT * FROM transactions WHERE user_id = ?', [userId]);
    return rows;
};

export const getBalance = async (userId: number) => {
    const [rows] = await db.query('SELECT type, amount FROM transactions WHERE user_id = ?', [userId]);
    return rows.reduce((balance, transaction) => {
        return transaction.type === 'income' ? balance + transaction.amount : balance - transaction.amount;
    }, 0);
};
