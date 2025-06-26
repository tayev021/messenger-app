import * as fs from 'node:fs';
import uniqid from 'uniqid';

class ConversationModelPlaceholder {
  constructor() {
    this.conversations = JSON.parse(
      fs.readFileSync('./data/conversations.json', 'utf8')
    );
  }

  findById(id) {
    return this.conversations[id];
  }

  create({ usersId }) {
    const id = uniqid();
    const unwatched = {};

    for (let id of usersId) {
      unwatched[id] = 0;
    }

    const newConversation = {
      id,
      users: usersId,
      unwatched,
      lastMessage: '',
    };

    this.conversations[id] = newConversation;
    this.save();

    return this.conversations[id];
  }

  updateLastMessage({ conversationId, user, message }) {
    if (message.length > 25) {
      this.conversations[conversationId].lastMessage =
        message.slice(0, 22) + '...';
    } else {
      this.conversations[conversationId].lastMessage = message;
    }

    for (let [userId, unwatchedNum] of Object.entries(
      this.conversations[conversationId].unwatched
    )) {
      if (userId !== user.id) {
        this.conversations[conversationId].unwatched[userId] = unwatchedNum + 1;
      }
    }

    this.save();

    return this.conversations[conversationId];
  }

  watchMessage({ conversationId, user }) {
    if (this.conversations[conversationId].unwatched[user.id] > 0)
      this.conversations[conversationId].unwatched[user.id]--;

    this.save();

    return this.conversations[conversationId];
  }

  getCurrentPartners(user) {
    const currentPartners = [];

    for (let conversationId of user.conversations) {
      currentPartners.push(
        ...this.conversations[conversationId].users.filter(
          (id) => id !== user.id
        )
      );
    }

    return currentPartners;
  }

  save() {
    fs.writeFileSync(
      './data/conversations.json',
      JSON.stringify(this.conversations)
    );
  }
}

const Conversation = new ConversationModelPlaceholder();

export { Conversation };
