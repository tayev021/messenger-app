import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { userRouter } from './routes/userRoutes.js';
import { conversationRouter } from './routes/conversationRoutes.js';
import { chatRouter } from './routes/chatRoutes.js';
import { AppError } from './utils/AppError.js';
import { globalErrorHandler } from './controllers/errorController.js';

const app = express();

//MIDDLEWARES
app.use(express.static('public'));
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(morgan('dev'));
app.use(express.json()); // body parser
app.use(cookieParser());

// ROUTES
app.use('/api/v1/users', userRouter);
app.use('/api/v1/conversations', conversationRouter);
app.use('/api/v1/chats', chatRouter);

// page not found
app.all('/{*any}', function (req, res, next) {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

export { app };
