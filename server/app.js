import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

const app = express();

//MIDDLEWARES
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(morgan('dev'));
app.use(express.json()); // body parser
app.use(cookieParser());

export { app };
