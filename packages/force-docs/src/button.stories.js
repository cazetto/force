import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  Button
} from 'force-components';

export default { title: 'Button' };

export const FilledVariants = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Button m="2">Filled Primary</Button>
    <Button m="2" variant="secondary">
      Filled Secondary
    </Button>
    <Button m="2" variant="tertiary">
      Filled Tertiary
    </Button>
    <Button m="2" variant="warning">
      Filled Warning
    </Button>
    <Button m="2" variant="danger">
      Filled Danger
    </Button>
    <Button m="2" disabled={true}>
      Filled Disabled
    </Button>
  </ForceThemeProvider>
);

export const OutlinedVariants = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Button m="2" outline={true}>
      Outlined Primary
    </Button>
    <Button m="2" outline={true} variant="secondary">
      Outlined Secondary
    </Button>
    <Button m="2" outline={true} variant="tertiary">
      Outlined Tertiary
    </Button>
    <Button m="2" outline={true} variant="warning">
      Outlined Warning
    </Button>
    <Button m="2" outline={true} variant="danger">
      Outlined Danger
    </Button>
    <Button m="2" outline={true} disabled={true}>
      Outlined Disabled
    </Button>
  </ForceThemeProvider>
);

export const Sizes = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <div>
      <Button m="2" size="xs">
        Outlined Primary
      </Button>
    </div>
    <div>
      <Button m="2" size="sm">
        Outlined Secondary
      </Button>
    </div>
    <div>
      <Button m="2" size="md">
        Outlined Tertiary
      </Button>
    </div>
    <div>
      <Button m="2" size="lg">
        Outlined Warning
      </Button>
    </div>
    <div>
      <Button m="2" size="xl">
        Outlined Danger
      </Button>
    </div>
  </ForceThemeProvider>
);

export const Margin = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <div>
      <Button m="1">m1</Button>
    </div>
    <div>
      <Button ml="4">ml4</Button>
    </div>
    <div>
      <Button mr="3" mt="4">
        m3 mt4
      </Button>
      <Button mr="3" mt="4">
        m3 mt4
      </Button>
    </div>
  </ForceThemeProvider>
);
