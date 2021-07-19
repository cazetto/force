/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';
import Button from './Button';

const setupButton = (props?: {}, children?: ReactNode) =>
  render(
    <ThemeProvider theme={primerTheme}>
      <Button {...props}>{children}</Button>
    </ThemeProvider>
  );

describe('Button Component', () => {
  test('should renders without errors', () => {
    const button = setupButton(undefined);
    expect(button).toBeTruthy();
  });
  test('should render the correct text inside the button', () => {
    const buttonChildren = 'The Button';
    const button = setupButton(undefined, buttonChildren);
    expect(button.getByText(buttonChildren)).toBeInTheDocument();
  });
  test('should run onClick prop function', () => {
    let isClicked = false;
    const button = setupButton({
      onClick: () => {
        isClicked = true;
      },
    });
    fireEvent(
      button.getByRole(/button/),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(isClicked).toBeTruthy();
  });
});
