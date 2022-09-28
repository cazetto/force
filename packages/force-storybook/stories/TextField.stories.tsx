import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  TextField,
} from 'force-components';

export default { title: 'Text Filed' };

export const Default = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <TextField />
  </ForceThemeProvider>
);
