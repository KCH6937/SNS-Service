import express from 'express';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import './utils/env.util';

// Import Routers
import { usersRouter } from './routes/users.route';
import { boardsRouter } from './routes/boards.route';

// Connect typeORM mysql
createConnection()
  .then(() => {
    console.log('Database Successfully Connected');
  })
  .catch(error => {
    console.log(error);
  });

// Create express server
const app = express();

// middlewares
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/api/users', usersRouter);
app.use('/api/boards', boardsRouter);

export default app;
