import * as fs from 'node:fs';
import uniqid from 'uniqid';

class ChatModelPlaceholder {
  findById(id) {
    const json = fs.readFileSync(`./data/chats/chat-${id}.json`, 'utf8');
    return JSON.parse(json);
  }

  create({ chatId, usersId }) {
    const newChat = {
      users: usersId,
      messages: [],
    };

    fs.writeFileSync(
      `./data/chats/chat-${chatId}.json`,
      JSON.stringify(newChat)
    );
  }

  createMessage({ chatId, user, images = [], message }) {
    const newMessage = {
      id: uniqid(),
      authorId: user.id,
      authorFullName: `${user.name} ${user.surname}`,
      images,
      text: message,
      isWatched: [],
      timestamp: +new Date(),
    };

    const json = fs.readFileSync(`./data/chats/chat-${chatId}.json`, 'utf8');
    const chat = JSON.parse(json);

    chat.messages.push(newMessage);

    fs.writeFileSync(`./data/chats/chat-${chatId}.json`, JSON.stringify(chat));

    return chat;
  }

  watchMessage({ chatId, messageId, user }) {
    const json = fs.readFileSync(`./data/chats/chat-${chatId}.json`, 'utf8');
    const chat = JSON.parse(json);
    const message = chat.messages.find((message) => message.id === messageId);

    if (message.isWatched.includes(user.id)) return chat;

    message.isWatched.push(user.id);

    fs.writeFileSync(`./data/chats/chat-${chatId}.json`, JSON.stringify(chat));

    return chat;
  }
}

const Chat = new ChatModelPlaceholder();

export { Chat };
