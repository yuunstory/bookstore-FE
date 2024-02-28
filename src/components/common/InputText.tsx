import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface Props {
  placeholder?: string;
}

const InputText = React.forwardRef(({ placeholder }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <>
      <InputTextStyle placeholder={placeholder} ref={ref} />
    </>
  );
});

const InputTextStyle = styled.input.attrs({ type: 'text' })`
  width: 340px;
  height: 40px;
  padding: 0.25rem 1rem;
  border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.secondary};

  &:focus {
    outline: none;
  }
`;

export default InputText;
