import styled from 'styled-components';
import { useState } from 'react';
import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2';

import { useSignin } from '../lib/hooks/useSignin';

const Form = styled.form`
  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  border-radius: 1rem;
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-medium);
`;

const H3 = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;

const Row = styled.div`
  position: relative;

  svg {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 0.8rem;
    left: 1.6rem;
    color: var(--color-grey-400);
  }

  &:has(input:focus) svg {
    color: var(--color-sky-400);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem 1.2rem 0.6rem 5rem;
  border: 2px solid var(--color-sky-400);
  border-radius: 99rem;
  box-shadow: var(--box-shadow-smallest);

  &::placeholder {
    color: var(--color-grey-400);
  }
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 99rem;
  color: var(--color-grey-50);
  background-color: var(--color-sky-400);
  box-shadow: var(--box-shadow-smallest);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--box-shadow-small);
  }

  &:active {
    transform: translateY(0);
    box-shadow: var(--box-shadow-smallest);
  }
`;

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
      <H3>Sign in to Messenger</H3>
      <Row>
        <HiOutlineEnvelope />
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          placeholder="your@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Row>
      <Row>
        <HiOutlineLockClosed />
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Row>
      <Button disabled={isLoading}>Sign in</Button>
    </Form>
  );
}
