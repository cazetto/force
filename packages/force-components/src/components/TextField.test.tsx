import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TextField } from './TextField';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';

function setup() {
  const ariaLabel = 'Username';
  const utils = render(
    <ThemeProvider theme={primerTheme}>
      <TextField ariaLabel={ariaLabel} />
    </ThemeProvider>
  );
  const component = utils.getByLabelText(ariaLabel) as HTMLInputElement;
  return {
    ...utils,
    component,
  };
}

describe('TextField Component', () => {
  test('should render without errors', () => {
    const { component } = setup();
    expect(component).toBeTruthy();
  });

  test('should change text value on type', () => {
    const { component } = setup();
    fireEvent.change(component, { target: { value: 'the text' } });
    expect(component.value).toBe('the text');
  });
});
