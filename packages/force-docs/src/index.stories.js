import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themePrimer, Button } from 'force-components';

export default { title: 'Button' };

export const FilledVariants = () => (
  <ThemeProvider theme={themePrimer}>
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
  </ThemeProvider>
);

export const OutlinedVariants = () => (
  <ThemeProvider theme={themePrimer}>
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
  </ThemeProvider>
);
