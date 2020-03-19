import React from 'react';

import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  Button,
  Box
} from 'force-components';

import { actions } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [
    (storyFn: any) => (
      <ForceThemeProvider
        theme={themePrimer}
        globalStyle={<PrimerGlobalStyle />}
      >
        {storyFn()}
      </ForceThemeProvider>
    ),
    withKnobs
  ]
};

const clickEvent = actions({
  onClick: 'clicked'
});

export const WithKnobs = () => (
  <Button
    m={select('m', ['0', '1', '2', '3', '4', '5', '6', '7', '8'], '0')}
    as={select('as', ['button', 'a'], 'button')}
    href={text('href', 'http://www.facebook.com')}
    target={select('target', ['_blank', '_self', '_parent', '_top'], '_blank')}
    alt={text('alt', 'Alt text')}
    type={select('type', ['button', 'submit', 'reset'], 'button')}
    autoFocus={boolean('autoFocus(boolean)', false)}
    outline={boolean('outline(boolean)', false)}
    disabled={boolean('disabled(boolean)', false)}
    ariaLabel={text('ariaLabel', 'Aria Label')}
    name={text('name', 'The Name')}
    variant={select(
      'variant',
      ['primary', 'secondary', 'tertiary', 'info', 'warning', 'danger'],
      'primary'
    )}
    size={select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'md')}
    {...clickEvent}
  >
    {text('children', 'Changeable Label')}
  </Button>
);

export const FilledVariants = () => (
  <>
    <Button {...clickEvent} m="2">
      Filled Primary
    </Button>
    <Button {...clickEvent} m="2" variant="secondary">
      Filled Secondary
    </Button>
    <Button {...clickEvent} m="2" variant="tertiary">
      Filled Tertiary
    </Button>
    <Button {...clickEvent} m="2" variant="warning">
      Filled Warning
    </Button>
    <Button {...clickEvent} m="2" variant="danger">
      Filled Danger
    </Button>
    <Button {...clickEvent} m="2" disabled={true}>
      Filled Disabled
    </Button>
  </>
);

export const OutlinedVariants = () => (
  <>
    <Button {...clickEvent} m="2" outline={true}>
      Outlined Primary
    </Button>
    <Button {...clickEvent} m="2" outline={true} variant="secondary">
      Outlined Secondary
    </Button>
    <Button {...clickEvent} m="2" outline={true} variant="tertiary">
      Outlined Tertiary
    </Button>
    <Button {...clickEvent} m="2" outline={true} variant="warning">
      Outlined Warning
    </Button>
    <Button {...clickEvent} m="2" outline={true} variant="danger">
      Outlined Danger
    </Button>
    <Button {...clickEvent} m="2" outline={true} disabled={true}>
      Outlined Disabled
    </Button>
  </>
);

export const Sizes = () => (
  <>
    <div>
      <Button {...clickEvent} m="2" size="xs">
        Outlined Primary
      </Button>
    </div>
    <div>
      <Button {...clickEvent} m="2" size="sm">
        Outlined Secondary
      </Button>
    </div>
    <div>
      <Button {...clickEvent} m="2" size="md">
        Outlined Tertiary
      </Button>
    </div>
    <div>
      <Button {...clickEvent} m="2" size="lg">
        Outlined Warning
      </Button>
    </div>
    <div>
      <Button {...clickEvent} m="2" size="xl">
        Outlined Danger
      </Button>
    </div>
  </>
);

export const Margin = () => (
  <>
    <div>
      <Button {...clickEvent} m="1">
        m1
      </Button>
    </div>
    <div>
      <Button {...clickEvent} ml="4">
        ml4
      </Button>
    </div>
    <div>
      <Button {...clickEvent} mr="3" mt="4">
        m3 mt4
      </Button>
      <Button {...clickEvent} mr="3" mt="4">
        m3 mt4
      </Button>
    </div>
  </>
);
