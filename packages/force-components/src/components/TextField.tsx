import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../index';
import { ComponentBaseProps } from './typing';

export interface TextFieldProps extends ComponentBaseProps {
  ariaLabel?: string;
}

const StyledInput = styled.input`
  border: none;
  height: 40px;
  background-color: ${({ theme }) => theme.text.colors.primary};
  color: white;
  border-radius: 4px;
  padding: 2px 10px 2px 10px;
`;

const TextField: FC<TextFieldProps> = (props = {}) => {
  const { ariaLabel, ...restProps } = props;
  return (
    <Box {...restProps}>
      <StyledInput type="text" aria-label={ariaLabel} />
    </Box>
  );
};

TextField.defaultProps = { ariaLabel: undefined };
TextField.propTypes = { ariaLabel: PropTypes.string };

export default TextField;
