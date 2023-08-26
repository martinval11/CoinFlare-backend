import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import compression from 'compression';
import dotenv from 'dotenv';

import router from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 5000;
const DB_URI = process.env.DB_URI ?? '';

app.use(compression());
app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://coinflare.vercel.app'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  })
);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.use(json());
    app.use('/api', router);

    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
  })
  .catch((err) => {
    console.error(err);
  });
