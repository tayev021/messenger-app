import { API_URL } from '../constants/constants';

export async function getChat(id) {
  const response = await fetch(`${API_URL}/chats/${id}`, {
    credentials: 'include',
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const chat = json.data.chat;

  if (!chat) return [];

  return chat;
}
