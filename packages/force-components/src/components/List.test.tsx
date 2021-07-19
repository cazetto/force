/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';
import List from './List';

const setupList = (props?: {}, children?: ReactNode) => render(
  <ThemeProvider theme={primerTheme}>
    <List {...props}>{children}</List>
  </ThemeProvider>,
);

describe('List Component', () => {
  test('should renders without errors', () => {
    const list = setupList();
    expect(list.getByTestId('list')).toBeTruthy();
  });
});
