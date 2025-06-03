import express from 'express';

import {
  logout,
  protect,
  signin,
  signup,
} from '../controllers/authController.js';
import { getMe } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.route('/signup').post(signup);
userRouter.route('/signin').post(signin);
userRouter.route('/logout').get(logout);

userRouter.route('/me').get(protect, getMe);

export { userRouter };
