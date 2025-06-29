import { useState } from 'react';
import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2';

import { useSignin } from '../../../entities/user';
import { Form } from '../../../shared/ui/form';

export function Signin() {
  const [email, setEmail] = useState('admin@gmail.com');
  const [password, setPassword] = useState('11111111');
  const { isLoading, signin } = useSignin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    signin({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Heading>Sign in to Messenger</Form.Heading>
      <Form.Row>
        <HiOutlineEnvelope />
        <Form.Input
          type="email"
          id="email"
          disabled={isLoading}
          placeholder="your@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Row>
      <Form.Row>
        <HiOutlineLockClosed />
        <Form.Input
          type="password"
          id="password"
          disabled={isLoading}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Row>
      <Form.Submit disabled={isLoading}>Sign in</Form.Submit>
    </Form>
  );
}
