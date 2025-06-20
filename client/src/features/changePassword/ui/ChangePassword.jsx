import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { Form } from '../../../shared/ui/form/Form';
import { validatePassword } from '../../../widgets/signup/lib/helpers/validatePassword';
import { getConfirmPasswordValidator } from '../../../widgets/signup/lib/helpers/getConfirmPasswordValidator';
import { useChangePassword } from '../lib/hooks/useChangePassword';

const StyledInput = styled(Form.Input)`
  padding: 0.6rem 1.8rem;
`;

export function ChangePassword() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { isLoading, changePassword } = useChangePassword();

  function submit({ password, newPassword }) {
    changePassword({ oldPassword: password, newPassword });
  }

  return (
    <Form type="inline" onSubmit={handleSubmit(submit)}>
      <Form.Heading>Change password</Form.Heading>
      <Form.Row>
        <Form.Error error={errors?.password?.message} />
        <StyledInput
          type="password"
          id="password"
          placeholder="Password"
          disabled={isLoading}
          {...register('password', { required: 'Field is required' })}
        />
      </Form.Row>
      <Form.Row>
        <Form.Error error={errors?.newPassword?.message} />
        <StyledInput
          type="password"
          id="newPassword"
          placeholder="New Password"
          disabled={isLoading}
          {...register('newPassword', { validate: validatePassword })}
        />
      </Form.Row>
      <Form.Row>
        <Form.Error error={errors?.confirmPassword?.message} />
        <StyledInput
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          disabled={isLoading}
          {...register('confirmPassword', {
            validate: getConfirmPasswordValidator(getValues().newPassword),
          })}
        />
      </Form.Row>
      <Form.Submit disabled={isLoading}>Confirm</Form.Submit>
    </Form>
  );
}
