import multer from 'multer';
import sharp from 'sharp';
import uniqid from 'uniqid';

import { catchAsyncError } from '../utils/catchAsyncError.js';
import { AppError } from '../utils/AppError.js';
import { User } from '../models/userModelPlaceholder.js';

export const getMe = catchAsyncError(async function (req, res, next) {
  const user = req.user;

  if (!user) {
    return next(new AppError('No user found, you should be signed in!', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});

export const changePassword = catchAsyncError(async function (req, res, next) {
  const { oldPassword, newPassword } = req.body;

  const user = User.findById(req.user.id);

  if (!(await User.isCorrectPassword(oldPassword, user.password || ''))) {
    return next(new AppError('Wrong password!', 401));
  }

  await User.changePassword(user.id, newPassword);

  res.cookie('jwt', 'sign out', {
    expires: new Date(Date.now() + 1),
    httpOnly: true,
  });

  res.status(200).json({ status: 'success' });
});

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true);
  } else {
    callback(
      new AppError('Not an image! Please upload only images.', 400),
      false
    );
  }
};

export const uploadAvatar = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
}).single('avatar');

export async function resizeAvatar(req, res, next) {
  if (!req.file) return next();

  const resizedImage = await sharp(req.file.buffer)
    .resize(500, 500, { fit: 'cover' })
    .toFormat('jpg')
    .toBuffer();

  req.file = resizedImage;

  next();
}

export const changeAvatar = catchAsyncError(async function (req, res, next) {
  if (!req.file) {
    return next(
      new AppError('No avatar image! Please provide your avatar image.', 400)
    );
  }

  const avatarPath = `avatar-${req.user.id}-${uniqid()}.jpg`;

  await sharp(req.file.buffer).toFile(`public/avatars/${avatarPath}`);

  const user = User.changeAvatar(req.user.id, avatarPath);

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});
