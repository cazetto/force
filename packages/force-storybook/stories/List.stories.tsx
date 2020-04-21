import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  List,
  ListItem,
  Box,
} from 'force-components';

export default { title: 'List' };

export const UnorderedList = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <List>
      <ListItem>1st Item</ListItem>
      <ListItem>2nd Item</ListItem>
      <ListItem>3rd Item</ListItem>
    </List>
  </ForceThemeProvider>
);

export const OrderedList = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <List as="ol">
      <ListItem>1st Item</ListItem>
      <ListItem>2nd Item</ListItem>
      <ListItem>3rd Item</ListItem>
    </List>
  </ForceThemeProvider>
);

export const DescriptionList = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <List as="dl">
      <ListItem as="dt">ul</ListItem>
      <ListItem as="dd">Unordered list</ListItem>
      <ListItem as="dt">ol</ListItem>
      <ListItem as="dd">Ordered list</ListItem>
      <ListItem as="dt">dt</ListItem>
      <ListItem as="dd">Description list</ListItem>
    </List>
  </ForceThemeProvider>
);

export const ListWithMarginAndPaddig = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box m="4" p="2">
      <List as="ul">
        <ListItem>1st Item</ListItem>
        <ListItem>2nd Item</ListItem>
        <ListItem>3rd Item</ListItem>
      </List>
    </Box>
  </ForceThemeProvider>
);
