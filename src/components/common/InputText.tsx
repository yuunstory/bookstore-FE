import React, { ForwardedRef } from 'react';
import styled from 'styled-components';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  inputType?: 'text' | 'email' | 'password' | 'number';
}

const InputText = React.forwardRef(
  ({ placeholder, inputType, onChange, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <InputTextStyle placeholder={placeholder} ref={ref} type={inputType} onChange={onChange} {...props} />
      </>
    );
  }
);

const InputTextStyle = styled.input`
  width: 340px;
  height: 40px;
  padding: 0.25rem 1rem;
  border: 2px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  font-size: 0.75rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.text};

  &:focus {
    outline: none;
  }
`;

export default InputText;
