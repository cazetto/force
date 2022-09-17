/* eslint-disable react/forbid-prop-types */
import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Theme } from '../themes/typing';

type ThemeProviderProps = {
  theme: Theme;
  children?: ReactNode;
  globalStyle?: ReactNode;
};

const ThemeProvider: FC<ThemeProviderProps> = ({
  theme,
  children,
  globalStyle,
}) => (
  <StyledComponentsThemeProvider theme={theme}>
    <Normalize />
    {globalStyle}
    {children}
  </StyledComponentsThemeProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
  globalStyle: PropTypes.any.isRequired,
};

export default ThemeProvider;
