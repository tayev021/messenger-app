import { Conversation } from '../models/conversationModelPlaceholder.js';
import { User } from '../models/userModelPlaceholder.js';

function getConversations(req, res) {
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
      lastMessage: conversation.lastMessage,
    };
  });

  res.status(200).json({
    status: 'success',
    data: { conversations },
  });
}

export { getConversations };
