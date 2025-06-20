import jwt from 'jsonwebtoken';
import pify from 'pify';

import { catchAsyncError } from '../utils/catchAsyncError.js';
import { User } from '../models/userModelPlaceholder.js';
import { AppError } from '../utils/AppError.js';

function signToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
}

function getCookieOptions() {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  return cookieOptions;
}

function sendToken(user, statusCode, res) {
  const token = signToken(user.id);
  const cookieOptions = getCookieOptions();

  // hide password from Signup
  user.password = undefined;

  res.cookie('jwt', token, cookieOptions);
  res.status(statusCode).json({
    status: 'success',
    token: token,
    data: { user },
  });
}

export const signup = catchAsyncError(async function (req, res) {
  const user = await User.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
  });

  sendToken(user, 200, res);
});

export const signin = catchAsyncError(async function (req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  const user = User.findByEmail(email);

  if (!user || !(await User.isCorrectPassword(password, user.password || ''))) {
    return next(new AppError('Wrong email or password!', 401));
  }

  sendToken(user, 200, res);
});

export const signout = catchAsyncError(async function (req, res) {
  res.cookie('jwt', 'sign out', {
    expires: new Date(Date.now() + 1),
    httpOnly: true,
  });

  res.status(200).json({ status: 'success' });
});

export const protect = catchAsyncError(async function (req, res, next) {
  const token = req.cookies.jwt;

  if (!token) {
    return next(
      new AppError('You are not signed in! Please sign in to get access.', 401)
    );
  }

  // verify token
  const decoded = await pify(jwt.verify)(token, process.env.JWT_SECRET);

  // user exist?
  const user = { ...(await User.findById(decoded.id)) };

  if (!user) {
    return next(
      new AppError('This token belonging to user which does not exist.', 401)
    );
  }

  user.password = undefined;
  req.user = user;

  next();
});
