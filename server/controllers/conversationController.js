import { Conversation } from '../models/conversationModelPlaceholder.js';
import { User } from '../models/userModelPlaceholder.js';
import { Chat } from '../models/chatModelPlaceholder.js';

export function getConversations(req, res) {
  const user = req.user;

  const conversations = user.conversations.map((id) => {
    const conversation = Conversation.findById(id);
    const partnerId = conversation.users.find((userId) => userId !== user.id);
    const partner = User.findById(partnerId);

    return {
      id: conversation.id,
      partnerId,
      partnerName: partner.name,
      partnerSurname: partner.surname,
      unwatched: conversation.unwatched[user.id],
      avatar: partner.avatar,
      lastMessage: conversation.lastMessage,
    };
  });

  res.status(200).json({
    status: 'success',
    data: { conversations },
  });
}

export function startConversation(req, res) {
  const user = req.user;
  const partnerId = req.body.partnerId;

  const newConversation = Conversation.create({
    usersId: [user.id, partnerId],
  });

  Chat.create({ chatId: newConversation.id, usersId: [user.id, partnerId] });
  User.addConversation({ userId: user.id, conversationId: newConversation.id });
  User.addConversation({
    userId: partnerId,
    conversationId: newConversation.id,
  });

  res.status(200).json({
    status: 'success',
    data: { chatId: newConversation.id },
  });
}
