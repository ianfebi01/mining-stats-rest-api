import express from 'express';
import db from './config/database.js';
import income from './routes/incomeRoute.js';
import cost from './routes/costRoute.js';
import cors from 'cors';
import users from './models/usersModel.js';
import userRouter from './routes/userRoute.js';

const app = express();

try {
  await db.authenticate();
  console.log('Database connected');
} catch (error) {
  console.error('Database connection error: ', error);
}

app.use(cors());
app.use(express.json());
app.use('/income', income);
app.use('/cost', cost);
app.use('/users', userRouter);
app.listen(406, () => console.log('Server running on port 406'));
