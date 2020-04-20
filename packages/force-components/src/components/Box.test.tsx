import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';
import Box from './Box';

const setupBox = (props?: {}, children?: ReactNode) => {
  return render(
    <ThemeProvider theme={primerTheme}>
      <Box {...props}>{children}</Box>
    </ThemeProvider>
  );
};

describe('Box Component', () => {
  test('should renders without errors', () => {
    const box = setupBox(undefined);
    expect(box).toBeTruthy();
  });
});
