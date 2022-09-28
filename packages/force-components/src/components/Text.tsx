/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, typography } from 'styled-system';
import {
  ComponentBaseProps,
  Size,
  Space,
  Variant,
  Color,
  FontWeight,
  ResponsiveSize,
  TextAlign,
  LineHeight,
} from './typing';

type Element = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps extends ComponentBaseProps {
  as?: Element;
  children?: ReactNode;
  variant?: Variant;
  color?: Color;
  fontSize?: Size | ResponsiveSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  textAlign?: TextAlign;
  ariaLabel?: string;
  m?: Space;
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;
  mx?: Space;
  my?: Space;
  p?: Space;
  pt?: Space;
  pr?: Space;
  pb?: Space;
  pl?: Space;
  px?: Space;
  py?: Space;
}

const TextStyled = styled.p.attrs(
  ({ theme, color, variant = 'primary' }: TextProps) => ({
    color: color ? theme?.colors[color] : theme?.text.colors[variant],
  })
)`
  color: ${({ color }) => color};
  font-family: inherit;

  ${space}
  ${typography}
`;

const Text: FC<TextProps> = ({ children, ariaLabel, ...rest }) => {
  if (rest.color && rest.variant) {
    // eslint-disable-next-line no-console
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

Text.defaultProps = { children: undefined, ariaLabel: undefined };
Text.propTypes = { children: PropTypes.node, ariaLabel: PropTypes.string };

export default Text;
