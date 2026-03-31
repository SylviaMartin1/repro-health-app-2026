import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import './db';
import usersRouter from './api/users';
import logsRouter from './api/logs';
import authenticate from './authenticate';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(errHandler);
app.use('/api/users', usersRouter);
app.use('/api/cycles', cyclesRouter);
app.use('/api/tasks', authenticate, cyclesRouter);

/*
app.listen(port, '0.0.0.0',() => {
  console.info(`Server running at ${port}`);
});
*/

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
