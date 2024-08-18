import { addTransaction, getTransactions, getBalance } from './services/financeService';
import { createUser, authenticateUser } from './services/userService';
import Elysia from "elysia";

const app = new Elysia();

app.post('/register', async ({ request }) => {
    const { username, password } = await request.json();
    const user = await createUser(username, password);
    return user;
});

app.post('/login', async ({ request, response }) => {
    const { username, password } = await request.json();
    const user = await authenticateUser(username, password);
    if (!user) {
        response.status(401).send({ error: 'Invalid credentials' });
        return;
    }
    return { message: 'Login successful', userId: user.id };
});

app.get('/balance/:userId', async ({ params }) => {
    const balance = await getBalance(parseInt(params.userId));
    return { balance };
});

app.get('/transactions/:userId', async ({ params }) => {
    const transactions = await getTransactions(parseInt(params.userId));
    return transactions;
});

app.post('/income', async ({ request }) => {
    const { userId, amount } = await request.json();
    const transaction = await addTransaction(userId, amount, 'income');
    return transaction;
});

app.post('/expense', async ({ request }) => {
    const { userId, amount } = await request.json();
    const transaction = await addTransaction(userId, amount, 'expense');
    return transaction;
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
