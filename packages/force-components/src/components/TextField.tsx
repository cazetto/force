import React, { FC } from 'react';
import { ComponentBaseProps } from './typing';

interface TextFieldProps extends ComponentBaseProps {}

const TextField: FC<TextFieldProps> = () => {
  return <input type="text" />
}

export { TextField };