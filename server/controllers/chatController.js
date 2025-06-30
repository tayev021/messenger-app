import multer from 'multer';
import sharp from 'sharp';
import uniqid from 'uniqid';

import { Chat } from '../models/chatModelPlaceholder.js';
import { Conversation } from '../models/conversationModelPlaceholder.js';
import { User } from '../models/userModelPlaceholder.js';
import { AppError } from '../utils/AppError.js';
import { catchAsyncError } from '../utils/catchAsyncError.js';

export const getChat = catchAsyncError(async function (req, res, next) {
  const chat = Chat.findById(req.params.chatId);

  if (!chat) {
    return next(new AppError('No chat found with that ID', 404));
  }

  const author = req.user;
  const partnerId = chat.users.find((id) => id !== author.id);
  const partner = User.findById(partnerId);
  const partnerFullName = `${partner.name} ${partner.surname}`;

  chat.users = undefined;
  chat.partnerFullName = partnerFullName;

  res.status(200).json({
    status: 'success',
    data: { chat },
  });
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

export const uploadImages = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
}).array('image');

export async function resizeImages(req, res, next) {
  if (!req.files.length) return next();

  const resizedImages = [];

  for (let image of req.files) {
    const resizedImage = await sharp(image.buffer)
      .resize(500, 500, { fit: 'cover' })
      .toFormat('jpg')
      .toBuffer();

    resizedImages.push(resizedImage);
  }

  req.files = resizedImages;

  next();
}

export const createMessage = catchAsyncError(async function (req, res) {
  const imageNames = req.files.map(
    () => `${req.params.chatId}-${uniqid()}.jpg`
  );

  const chat = Chat.createMessage({
    chatId: req.params.chatId,
    user: req.user,
    images: imageNames,
    message: req.body.message,
  });

  for (let i = 0; i < req.files.length; i++) {
    await sharp(req.files[i].buffer).toFile(`public/images/${imageNames[i]}`);
  }

  const imagesNum =
    imageNames.length > 0 ? `images [${imageNames.length}]` : '';
  const lastMessage = `${imagesNum} ${req.body.message}`;

  Conversation.updateLastMessage({
    conversationId: req.params.chatId,
    user: req.user,
    message: lastMessage,
  });

  res.status(200).json({
    status: 'success',
    data: { chat },
  });
});

export const watchMessage = catchAsyncError(async function (req, res) {
  const chat = Chat.watchMessage({
    chatId: req.params.chatId,
    messageId: req.params.messageId,
    user: req.user,
  });

  Conversation.watchMessage({
    conversationId: req.params.chatId,
    user: req.user,
  });

  res.status(200).json({
    status: 'success',
    data: { chat },
  });
});
