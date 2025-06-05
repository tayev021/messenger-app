import styled from 'styled-components';

import { Heading } from './Heading';
import { Row } from './Row';
import { Input } from './Input';
import { Error } from './Error';
import { Submit } from './Submit';

const StyledForm = styled.form`
  width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem;
  border-radius: 1rem;
  background-color: var(--color-grey-50);
  box-shadow: var(--box-shadow-medium);
`;

export function Form({ children, ...props }) {
  return <StyledForm {...props}>{children}</StyledForm>;
}

Form.Heading = Heading;
Form.Row = Row;
Form.Input = Input;
Form.Error = Error;
Form.Submit = Submit;
