import React, { forwardRef, FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { space, layout, color } from 'styled-system';
import { Theme } from '../themes/typing';
import { Size, Space, Variant } from './typing';
interface ComponentBaseProps {
  theme?: Theme;
}

type ButtonTypes = 'button' | 'submit' | 'reset';

interface ButtonProps extends ComponentBaseProps {
  children?: ReactNode;
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

const getCommonCss = ({
  sizeFont,
  sizePadding,
  sizeFocusedShadow,
  colorFocusedShadow,
  disabled
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

    font-size: ${() => sizeFont};
    padding: ${() => sizePadding};
    cursor: ${() => (disabled ? 'not-allowed' : 'pointer')};
    &:focus {
      outline: 0;
      :focus {
        box-shadow: ${() =>
          `0px 0px 0px ${sizeFocusedShadow} ${colorFocusedShadow}`};
      }
    }
  `;
};

const getFilledCss = ({ colorHue, colorContrast, borderWidth }: any) => {
  return css`
    color: ${colorContrast};
    border: ${borderWidth} solid ${colorHue};
    background-color: ${colorHue};
  `;
};

const getOutlineCss = ({ colorHue, colorContrast, borderWidth }: any) => {
  return css`
    color: ${colorHue};
    border: ${borderWidth} solid ${colorHue};
    background-color: ${colorContrast};
  `;
};

export const ButtonStyled = styled.button.attrs(
  ({
    theme,
    disabled,
    outline,
    variant = 'primary',
    size = 'md'
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
      outline
    };
  }
)`
  ${props => getCommonCss(props)};
  ${props => (props.outline ? getOutlineCss(props) : getFilledCss(props))};
  ${space}
  ${layout}
  ${color}
`;

export default Button;
