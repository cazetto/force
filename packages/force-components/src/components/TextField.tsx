import React, { FC } from 'react';
import { ComponentBaseProps } from './typing';

export interface TextFieldProps extends ComponentBaseProps {
  ariaLabel?: string;
}

export const TextField: FC<TextFieldProps> = (props = {}) => {  
  return <input type="text" {...props} />;
}

export default TextField;