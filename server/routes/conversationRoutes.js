import express from 'express';

import { protect } from '../controllers/authController.js';
import { getConversations } from '../controllers/conversationController.js';

const conversationRouter = express.Router();

conversationRouter.route('/').get(protect, getConversations);

export { conversationRouter };
