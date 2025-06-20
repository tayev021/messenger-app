import { API_URL } from '../../../shared/constants/constants';

export async function changeAvatar({ avatar }) {
  const formData = new FormData();
  formData.append('avatar', avatar);

  const response = await fetch(`${API_URL}/users/avatar`, {
    method: 'PATCH',
    credentials: 'include',
    body: formData,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const user = json.data.user;

  return user;
}
