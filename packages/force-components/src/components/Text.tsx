import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { space, typography } from 'styled-system';
import {
  ComponentBaseProps,
  Size,
  Space,
  Variant,
  Color,
  FontWeight
} from './typing';

type ElementType = 'p' | 'span' | 'div';

interface TextProps extends ComponentBaseProps {
  as?: ElementType;
  children?: ReactNode;
  variant?: Variant;
  color?: Color;
  fontSize?: Size;
  fontWeight?: FontWeight;
  ariaLabel?: string;
  m?: Space;
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;
  p?: Space;
  pt?: Space;
  pr?: Space;
  pb?: Space;
  pl?: Space;
}

const Text: FC<TextProps> = ({ children, ariaLabel, ...rest }) => {
  if (rest.color && rest.variant) {
    console.warn(
      'Force Components: You are passing color and variant for a Text component, the color will prevail over variant.'
    );
  }
  return (
    <TextStyled {...(ariaLabel ? { 'aria-label': ariaLabel } : {})} {...rest}>
      {children}
    </TextStyled>
  );
};

const TextStyled = styled.p.attrs(
  ({ theme, color, variant = 'primary' }: TextProps) => {
    return {
      color: color ? theme?.colors[color] : theme?.text.colors[variant]
    };
  }
)`
  color: ${({ color }) => color};
  font-family: inherit;

  ${space}
  ${typography}
`;

export default Text;
