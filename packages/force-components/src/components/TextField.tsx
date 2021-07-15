import React, { FC } from 'react';
import Box from './Box';
import { ComponentBaseProps } from './typing';

export interface TextFieldProps extends ComponentBaseProps {
  ariaLabel?: string;
}

export const TextField: FC<TextFieldProps> = (props = {}) => {
  const {ariaLabel, ...restProps} = props;
  return <Box  {...restProps}><input type="text" aria-label={ariaLabel} /></Box>;
}

export default TextField;
