import { useEffect, useState } from 'react';

import { useChangeAvatar } from '../lib/hooks/useChangeAvatar';
import { Form } from '../../../shared/ui/form/Form';
import { UserAvatar } from '../../../entities/user/';

export function ChangeAvatar({ closeModal }) {
  const [image, setImage] = useState(null);
  const { isLoading, isSuccess, changeAvatar } = useChangeAvatar();

  useEffect(
    function () {
      if (isSuccess) closeModal();
    },
    [isSuccess, closeModal]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (image) {
      changeAvatar({ avatar: image });
    }
  }

  return (
    <Form type="inline" onSubmit={handleSubmit}>
      <Form.Heading>Change avatar</Form.Heading>
      <Form.Row>
        <UserAvatar
          imageSrc={image && URL.createObjectURL(image)}
          type="inline"
        />
      </Form.Row>
      <Form.Row>
        <Form.Label htmlFor="avatar">Choose image</Form.Label>
        <Form.Input
          type="file"
          name="avatar"
          id="avatar"
          accept="image/png, image/jpeg"
          onChange={(e) => setImage(e.target.files[0])}
          disabled={isLoading}
        />
      </Form.Row>
      <Form.Submit disabled={isLoading}>Confirm</Form.Submit>
    </Form>
  );
}
