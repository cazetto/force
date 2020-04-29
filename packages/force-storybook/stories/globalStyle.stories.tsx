import React from 'react';
import { css } from 'styled-components';
import {
  ForceThemeProvider,
  themePrimer,
  Box,
  extendPrimerGlobalStyle,
  PrimerGlobalStyle,
} from 'force-components';

export default { title: 'GlobalStyle' };

const customStyle = css`
  html,
  body,
  #root {
    height: 100%;
  }
`;
const PrimerCustomGlobalStyle = extendPrimerGlobalStyle(customStyle);

export const PrimerDefault = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      display="flex"
      flexDirection="row"
      bg="colorPink500"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      p="4"
    >
      Primer Theme Default Global Style
    </Box>
  </ForceThemeProvider>
);

export const PrimerCustom = () => (
  <ForceThemeProvider
    theme={themePrimer}
    globalStyle={<PrimerCustomGlobalStyle />}
  >
    <Box
      display="flex"
      flexDirection="row"
      bg="colorGreen400"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
      p="4"
    >
      Primer Theme Default Global Style
    </Box>
  </ForceThemeProvider>
);
