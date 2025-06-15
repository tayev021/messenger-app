import * as fs from 'node:fs/promises';
import uniqid from 'uniqid';

class ChatModelPlaceholder {
  async findById(id) {
    const json = await fs.readFile(`./data/chats/chat-${id}.json`, 'utf8');
    return JSON.parse(json);
  }

  async createMessage({ chatId, user, message }) {
    const newMessage = {
      id: uniqid(),
      authorId: user.id,
      authorFullName: `${user.name} ${user.surname}`,
      text: message,
      isWatched: [],
      timestamp: +new Date(),
    };

    const json = await fs.readFile(`./data/chats/chat-${chatId}.json`, 'utf8');
    const chat = JSON.parse(json);

    chat.messages.push(newMessage);

    await fs.writeFile(
      `./data/chats/chat-${chatId}.json`,
      JSON.stringify(chat),
      'utf8'
    );

    return chat;
  }

  async watchMessage({ chatId, messageId, user }) {
    const json = await fs.readFile(`./data/chats/chat-${chatId}.json`, 'utf8');
    const chat = JSON.parse(json);
    const message = chat.messages.find((message) => message.id === messageId);
    message.isWatched.push(user.id);

    await fs.writeFile(
      `./data/chats/chat-${chatId}.json`,
      JSON.stringify(chat),
      'utf8'
    );

    return chat;
  }
}

const Chat = new ChatModelPlaceholder();

export { Chat };
