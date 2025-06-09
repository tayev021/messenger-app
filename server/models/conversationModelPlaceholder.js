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

  save() {
    fs.writeFileSync(
      './data/conversations.json',
      JSON.stringify(this.conversations)
    );
  }
}

const Conversation = new ConversationModelPlaceholder();

export { Conversation };
