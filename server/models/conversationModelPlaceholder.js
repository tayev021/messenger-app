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

  create({ users, lastMessage }) {
    const id = uniqid();
    const newConversation = {
      id,
      users,
      lastMessage,
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
    if (this.conversations[conversationId].unwatched[user.id] <= 0) return;

    this.conversations[conversationId].unwatched[user.id]--;
    this.save();

    return this.conversations[conversationId];
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
