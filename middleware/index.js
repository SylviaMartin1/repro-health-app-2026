import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import './db';
import usersRouter from './api/users';
import logsRouter from './api/logs';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/logs', logsRouter);

/*
app.listen(port, '0.0.0.0',() => {
  console.info(`Server running at ${port}`);
});
*/

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
