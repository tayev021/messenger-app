import { useForm } from 'react-hook-form';
import { TbLetterN, TbLetterS } from 'react-icons/tb';
import { HiOutlineEnvelope, HiOutlineLockClosed } from 'react-icons/hi2';

import { useSignup } from '../../../entities/user';
import { validateName } from '../lib/helpers/validateName';
import { validateEmail } from '../lib/helpers/validateEmail';
import { validatePassword } from '../lib/helpers/validatePassword';
import { getConfirmPasswordValidator } from '../lib/helpers/getConfirmPasswordValidator';
import { Form } from '../../../shared/ui/form';

export function Signup() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { isLoading, signup } = useSignup();

  function submit({ name, surname, email, password }) {
    signup({ name, surname, email, password });
  }

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Form.Heading>Sign up for Messenger</Form.Heading>
      <Form.Row>
        <TbLetterN />
        <Form.Error error={errors?.name?.message} />
        <Form.Input
          type="text"
          id="name"
          disabled={isLoading}
          placeholder="Name"
          {...register('name', { validate: validateName })}
        />
      </Form.Row>
      <Form.Row>
        <TbLetterS />
        <Form.Error error={errors?.surname?.message} />
        <Form.Input
          type="text"
          id="surname"
          disabled={isLoading}
          placeholder="Surname"
          {...register('surname', { validate: validateName })}
        />
      </Form.Row>
      <Form.Row>
        <HiOutlineEnvelope />
        <Form.Error error={errors?.email?.message} />
        <Form.Input
          type="email"
          id="email"
          disabled={isLoading}
          placeholder="Email"
          {...register('email', { validate: validateEmail })}
        />
      </Form.Row>
      <Form.Row>
        <HiOutlineLockClosed />
        <Form.Error error={errors?.password?.message} />
        <Form.Input
          type="password"
          id="password"
          disabled={isLoading}
          placeholder="Password"
          {...register('password', { validate: validatePassword })}
        />
      </Form.Row>
      <Form.Row>
        <HiOutlineLockClosed />
        <Form.Error error={errors?.confirmPassword?.message} />
        <Form.Input
          type="password"
          id="confirmPassword"
          disabled={isLoading}
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            validate: getConfirmPasswordValidator(getValues().password),
          })}
        />
      </Form.Row>
      <Form.Submit disabled={isLoading}>Sign up</Form.Submit>
    </Form>
  );
}
