import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';
import List from './List';
import ListItem from './ListItem';

const setupList = (props?: {}, children?: ReactNode) => {
  return render(
    <ThemeProvider theme={primerTheme}>
      <List {...props}>{children}</List>
    </ThemeProvider>
  );
};

describe('ListItem Component', () => {
  test('should renders without errors', () => {
    const list = setupList(
      undefined,
      <>
        <ListItem>Item 1</ListItem>
        <ListItem></ListItem>
        <ListItem as="li">Item 3</ListItem>
      </>
    );
    expect(list.getAllByTestId('list-item')).toHaveLength(3);
  });

  test('should renders with correct text', () => {
    const text = 'Just in case';
    const list = setupList(
      undefined,
      <>
        <ListItem>{text}</ListItem>
      </>
    );
    expect(list.getByText(text)).toBeTruthy();
  });
});
