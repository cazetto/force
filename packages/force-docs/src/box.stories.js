import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  Box
} from 'force-components';

export default { title: 'Box' };

export const FlexBox = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      display="flex"
      flexDirection="row"
      bg="colorGray200"
      alignItems="center"
    >
      <Box flexGrow="1" height="300px" bg="colorBlue400">
        Col 1
      </Box>
      <Box flexGrow="2" height="200px" bg="colorRed600">
        Col 2
      </Box>
    </Box>
  </ForceThemeProvider>
);

export const GridLayout = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gridGap="10px"
      gridAutoRows="minmax(100px, auto)"
    >
      <Box gridColumn="1 / 3" gridRow="1" bg="colorBlue"></Box>
      <Box gridColumn="2 / 4" gridRow="1 / 3" bg="colorGreen"></Box>
      <Box gridColumn="1" gridRow="2 / 5" bg="colorYellow"></Box>
      <Box gridColumn="3" gridRow="3" bg="colorRed"></Box>
      <Box gridColumn="2" gridRow="4" bg="colorPink"></Box>
      <Box gridColumn="3" gridRow="4" bg="colorPurple"></Box>
    </Box>
  </ForceThemeProvider>
);

export const Colorized = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      bg="colorRed400"
      color="colorYellow500"
      height="200px"
      textAlign="center"
      lineHeight="200px"
      fontSize="xl"
    >
      Colorized Box
    </Box>
  </ForceThemeProvider>
);

export const Transparent = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      opacity=".5"
      bg="colorGray900"
      height="50vh"
      width="100%"
      textAlign="center"
      lineHeight="50vh"
      fontSize="xl"
      zIndex="2"
      position="absolute"
    >
      Transparent (0.5)
    </Box>
    <Box
      position="absolute"
      bg="colorPurple"
      height="100px"
      width="100%"
      textAlign="center"
      lineHeight="50vh"
      marginTop="calc(50vh - 50px)"
      fontSize="xl"
      zIndex="1"
    ></Box>
  </ForceThemeProvider>
);

export const Position = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      position="fixed"
      zIndex="2"
      top="0px"
      bg="colorRed900"
      size="100px"
    ></Box>
    <Box
      position="absolute"
      bg="colorGray300"
      width="100%"
      height="5000px"
    ></Box>
  </ForceThemeProvider>
);

export const Margin = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box position="fixed" top="0px" bg="colorGreen900" size="200px" m="5"></Box>
  </ForceThemeProvider>
);

export const Padding = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      position="fixed"
      top="0px"
      bg="colorPurple700"
      p="4"
      color="colorGray000"
      fontSize="lg"
    >
      Padding
    </Box>
  </ForceThemeProvider>
);

export const Font = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box
      position="fixed"
      top="0px"
      bg="colorPink"
      p="4"
      color="colorGray000"
      fontSize="sm"
      fontWeight="900"
    >
      Padding
    </Box>
  </ForceThemeProvider>
);
