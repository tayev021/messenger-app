import { catchAsyncError } from '../utils/catchAsyncError.js';
import { AppError } from '../utils/AppError.js';

const getMe = catchAsyncError(async function (req, res, next) {
  const user = req.user;

  if (!user) {
    return next(new AppError('No user found, you should be signed in!', 404));
  }

  res.status(200).json({
    status: 'success',
    data: { user },
  });
});

export { getMe };
