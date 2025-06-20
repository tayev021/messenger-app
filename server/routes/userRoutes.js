import express from 'express';

import {
  protect,
  signin,
  signout,
  signup,
} from '../controllers/authController.js';
import {
  uploadAvatar,
  resizeAvatar,
  changeAvatar,
  changePassword,
  getMe,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.route('/signup').post(signup);
userRouter.route('/signin').post(signin);
userRouter.route('/signout').get(signout);

userRouter.route('/me').get(protect, getMe);
userRouter.route('/password').patch(protect, changePassword);
userRouter
  .route('/avatar')
  .patch(protect, uploadAvatar, resizeAvatar, changeAvatar);

export { userRouter };
