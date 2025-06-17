import { API_URL } from '../../../shared/constants/constants';

export async function sendMessage({ chatId, images, message }) {
  const formData = new FormData();
  formData.append('message', message);

  for (let image of Array.from(images)) {
    formData.append('image', image);
  }

  const response = await fetch(`${API_URL}/chats/${chatId}/message`, {
    method: 'POST',
    credentials: 'include',
    body: formData,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const chat = json.data.chat;

  return chat;
}
