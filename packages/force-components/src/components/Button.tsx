/* eslint-disable @typescript-eslint/indent */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */

import React, { forwardRef, FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { space, layout, color } from 'styled-system';
import { ComponentBaseProps, Size, Space, Variant } from './typing';

type ButtonTypes = 'button' | 'submit' | 'reset';

type Element = 'a' | 'button';

interface ButtonProps extends ComponentBaseProps {
  children?: ReactNode;
  as?: Element;
  href?: string;
  alt?: string;
  target?: '_blank' | '_parent' | '_self' | '_top';
  type?: ButtonTypes;
  autoFocus?: boolean;
  name?: string;
  ariaLabel?: string;
  onClick?: any;
  disabled?: boolean;
  outline?: boolean;
  variant?: Variant;
  size?: Size;
  m?: Space;
  mt?: Space;
  mr?: Space;
  mb?: Space;
  ml?: Space;
}

const getCommonCss = ({
  sizeFont,
  sizePadding,
  sizeFocusedShadow,
  colorFocusedShadow,
  disabled,
}: any) => {
  return css`
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    border: none;
    box-sizing: border-box;
    user-select: none;
    font-family: inherit;
    font-size: ${() => sizeFont};
    padding: ${() => sizePadding};
    cursor: ${() => (disabled ? 'not-allowed' : 'pointer')};
    &:focus {
      outline: 0;
      :focus {
        box-shadow: ${() => {
      return `0px 0px 0px ${sizeFocusedShadow} ${colorFocusedShadow}`;
    }};
      }
    }
  `;
};

const getFilledCss = ({ colorHue, colorContrast, borderWidth }: any) => css`
  color: ${colorContrast};
  border: ${borderWidth} solid ${colorHue};
  background-color: ${colorHue};
`;

const getOutlineCss = ({ colorHue, borderWidth }: any) => css`
  color: ${colorHue};
  border: ${borderWidth} solid ${colorHue};
  background-color: transparent;
`;

export const ButtonStyled = styled.button.attrs(
  ({
    theme,
    disabled,
    outline,
    variant = 'primary',
    size = 'md',
  }: ButtonProps) => {
    if (!theme?.button) {
      throw new Error(
        'Button: Force components need to be inside ThemeProvider in the component tree.'
      );
    }

    return {
      colorHue: theme?.button.colors.hue[(disabled && 'disabled') || variant],
      colorContrast:
        theme?.button.colors.contrast[(disabled && 'disabled') || variant],
      colorFocusedShadow: theme?.button.colors.focusedShadow[variant],
      sizePadding: theme?.button.sizes.padding[size],
      sizeFont: theme?.button.sizes.font[size],
      sizeFocusedShadow: theme?.button.sizes.focusedShadow[size],
      borderWidth: theme?.button.sizes.borderWidth[size],
      outline,
    };
  }
)`
  ${(props) => getCommonCss(props)};
  ${(props) => (props.outline ? getOutlineCss(props) : getFilledCss(props))};
  ${space}
  ${layout}
  ${color}
`;

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ariaLabel, ...rest }, ref) => (
    <ButtonStyled
      {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
      {...rest}
      ref={ref}
    >
      {children}
    </ButtonStyled>
  )
);

Button.defaultProps = {
  children: undefined,
  ariaLabel: undefined,
};

Button.propTypes = {
  children: PropTypes.node,
  ariaLabel: PropTypes.string,
};

export default Button;
