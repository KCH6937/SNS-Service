import express from 'express';
import { createConnection } from 'typeorm';
import morgan from 'morgan';
import 'dotenv/config';

// Import Routers
import { usersRouter } from './routes/users.route';
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
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

// Routes
app.use('/users', usersRouter);

export default app;
