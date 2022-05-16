import express from 'express';
import db from './config/database.js';
import income from './routes/incomeRoute.js';
import cost from './routes/costRoute.js';
import cors from 'cors';

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

app.listen(406, () => console.log('Server running on port 406'));
