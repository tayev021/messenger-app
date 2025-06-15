import { Chat } from '../models/chatModelPlaceholder.js';
import { Conversation } from '../models/conversationModelPlaceholder.js';
import { User } from '../models/userModelPlaceholder.js';
import { AppError } from '../utils/AppError.js';
import { catchAsyncError } from '../utils/catchAsyncError.js';

export const getChat = catchAsyncError(async function (req, res, next) {
  const chat = await Chat.findById(req.params.chatId);

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

export const createMessage = catchAsyncError(async function (req, res) {
  const chat = await Chat.createMessage({
    chatId: req.params.chatId,
    user: req.user,
    message: req.body.message,
  });

  Conversation.updateLastMessage({
    conversationId: req.params.chatId,
    user: req.user,
    message: req.body.message,
  });

  res.status(200).json({
    status: 'success',
    data: { chat },
  });
});

export const watchMessage = catchAsyncError(async function (req, res) {
  const chat = await Chat.watchMessage({
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
