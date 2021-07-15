import React, { FC } from 'react';
import styled from 'styled-components';
import Box from './Box';
import { ComponentBaseProps } from './typing';

export interface TextFieldProps extends ComponentBaseProps {
  ariaLabel?: string;
}

const StyledInput = styled.input`
  border: none;
  height: 40px;
  background-color: ${({ theme }) => theme.text.colors.primary };
  color: white;
  border-radius: 4px;
  padding: 2px 10px 2px 10px;
`;

export const TextField: FC<TextFieldProps> = (props = {}) => {
  const {ariaLabel, ...restProps} = props;
  return <Box {...restProps}><StyledInput type="text" aria-label={ariaLabel} /></Box>;
}

export default TextField;
