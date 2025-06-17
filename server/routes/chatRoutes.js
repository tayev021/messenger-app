import express from 'express';

import { protect } from '../controllers/authController.js';
import {
  createMessage,
  watchMessage,
  getChat,
  uploadImages,
  resizeImages,
} from '../controllers/chatController.js';

const chatRouter = express.Router();

chatRouter.route('/:chatId').get(protect, getChat);
chatRouter
  .route('/:chatId/message')
  .post(protect, uploadImages, resizeImages, createMessage);
chatRouter
  .route('/:chatId/message/:messageId/watch')
  .post(protect, watchMessage);

export { chatRouter };
