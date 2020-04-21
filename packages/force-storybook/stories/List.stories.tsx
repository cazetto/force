import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  List,
  Box,
} from 'force-components';

export default { title: 'List' };

export const UnorderedList = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <List>
      <li>1st Item</li>
      <li>2nd Item</li>
      <li>3rd Item</li>
    </List>
  </ForceThemeProvider>
);

export const OrderedList = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <List as="ol">
      <li>1st Item</li>
      <li>2nd Item</li>
      <li>3rd Item</li>
    </List>
  </ForceThemeProvider>
);

export const DescriptionList = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <List as="dl">
      <dt>ul</dt>
      <dd>Unordered list</dd>
      <dt>ol</dt>
      <dd>Ordered list</dd>
      <dt>dt</dt>
      <dd>Description list</dd>
    </List>
  </ForceThemeProvider>
);

export const ListWithMarginAndPaddig = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box m="4" p="2">
      <List as="ul">
        <li>1st Item</li>
        <li>2nd Item</li>
        <li>3rd Item</li>
      </List>
    </Box>
  </ForceThemeProvider>
);
