import React, { FC, ReactNode } from 'react';
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
  globalStyle
}) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <Normalize />
      {globalStyle}
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
