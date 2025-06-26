import express from 'express';

import { protect } from '../controllers/authController.js';
import {
  getConversations,
  startConversation,
} from '../controllers/conversationController.js';

const conversationRouter = express.Router();

conversationRouter.route('/').get(protect, getConversations);
conversationRouter.route('/').post(protect, startConversation);

export { conversationRouter };
