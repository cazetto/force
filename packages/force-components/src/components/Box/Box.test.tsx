import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../../themes/primer';
import Box from './Box';

describe('Box Component', () => {
  test('renders without crashing', () => {
    const container = render(
      <ThemeProvider theme={primerTheme}>
        <Box>Box</Box>
      </ThemeProvider>
    );
    expect(container.getByText('Box')).toBeInTheDocument();
  });

  test('renders as a Button without crashing', () => {
    const buttonLabel = 'Box as a Button';
    const handleClick = jest.fn();
    const container = render(
      <ThemeProvider theme={primerTheme}>
        <Box as="button" onClick={handleClick}>
          {buttonLabel}
        </Box>
      </ThemeProvider>
    );
    userEvent.click(container.getByText(buttonLabel));
    expect(handleClick).toHaveBeenCalled();
  });
});
