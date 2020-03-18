import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  Text
} from 'force-components';

export default { title: 'Text' };

export const Variants = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Text variant="primary">Primary</Text>
    <Text variant="secondary">Secondary</Text>
    <Text variant="tertiary">Terciary</Text>
    <Text variant="info">Info</Text>
    <Text variant="warning">Warning</Text>
    <Text variant="danger">Danger</Text>
  </ForceThemeProvider>
);

export const Sizes = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Text fontSize="xs">Extra Small</Text>
    <Text fontSize="sm">Small</Text>
    <Text fontSize="md">Medium</Text>
    <Text fontSize="lg">Large</Text>
    <Text fontSize="xl">Extra Large</Text>
  </ForceThemeProvider>
);

export const Weights = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Text fontWeight="100">100</Text>
    <Text fontWeight="200">200</Text>
    <Text fontWeight="300">300</Text>
    <Text fontWeight="400">400</Text>
    <Text fontWeight="500">500</Text>
    <Text fontWeight="600">600</Text>
    <Text fontWeight="700">700</Text>
    <Text fontWeight="800">800</Text>
    <Text fontWeight="900">900</Text>
  </ForceThemeProvider>
);
