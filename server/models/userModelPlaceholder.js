import * as fs from 'node:fs';
import bcrypt from 'bcryptjs';
import uniqid from 'uniqid';

import { AppError } from '../utils/AppError.js';
import {
  isValidName,
  isValidEmail,
  isValidPassword,
} from '../utils/validators.js';

class UserModelPlaceholder {
  constructor() {
    this.users = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));
  }

  getAll() {
    return Object.values(JSON.parse(JSON.stringify(this.users)));
  }

  findById(id) {
    return { ...this.users[id] };
  }

  findByEmail(email) {
    let user = Object.values(this.users).find((user) => user.email === email);
    return user ? { ...user } : null;
  }

  async isCorrectPassword(password, encryptedPassword) {
    return await bcrypt.compare(password, encryptedPassword);
  }

  async changePassword(id, newPassword) {
    this.users[id].password = await bcrypt.hash(newPassword, 12);
    this.save();
  }

  changeAvatar(id, avatarPath) {
    if (this.users[id].avatar) {
      fs.unlinkSync(`./public/avatars/${this.users[id].avatar}`);
    }

    this.users[id].avatar = avatarPath;
    this.save();

    return this.users[id];
  }

  addConversation({ userId, conversationId }) {
    this.users[userId].conversations.push(conversationId);
    this.save();
  }

  async create(userData) {
    if (Object.values(this.users).find((user) => user.email === userData.email))
      throw new AppError('This email already registered', 400);

    this.validate(userData);

    const id = uniqid();
    const newUser = {
      id,
      name: `${userData.name[0].toUpperCase()}${userData.name.slice(1)}`,
      surname: `${userData.surname[0].toUpperCase()}${userData.surname.slice(1)}`,
      email: userData.email,
      password: await bcrypt.hash(userData.password, 12),
      avatar: '',
      conversations: [],
    };

    this.users[id] = newUser;
    this.save();

    return this.users[id];
  }

  save() {
    fs.writeFileSync('./data/users.json', JSON.stringify(this.users));
  }

  validate({ name, surname, email, password }) {
    if (!isValidName(name))
      throw new AppError(`"${name}" is not a valid name!`, 400);
    if (!isValidName(surname))
      throw new AppError(`"${surname}" is not a valid surname!`, 400);
    if (!isValidEmail(email))
      throw new AppError(`"${email}" is not a valid email!`, 400);
    if (!isValidPassword(password))
      throw new AppError(`"${password}" is not a valid password!`, 400);
  }
}

const User = new UserModelPlaceholder();

export { User };
