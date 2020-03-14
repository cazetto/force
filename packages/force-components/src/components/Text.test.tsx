import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';
import Text from './Text';

const setupText = (props?: {}, children?: ReactNode) => {
  return render(
    <ThemeProvider theme={primerTheme}>
      <Text {...props}>{children}</Text>
    </ThemeProvider>
  );
};

describe('Text Component', () => {
  test('should renders without errors', () => {
    const textToBeRendered: string = 'Dignissimos dolores et vitae adipisci';
    const text = setupText(undefined, textToBeRendered);
    expect(text).toBeTruthy();
  });
  test('should render the correct text', () => {
    const textToBeRendered: string = 'Dignissimos dolores et vitae adipisci';
    const text = setupText(undefined, textToBeRendered);
    expect(text.getByText(textToBeRendered)).toBeInTheDocument();
  });
  test('should render tag correspondent to the as prop', () => {
    const anyText: string = 'sapiente';
    let { container: spanContainer } = setupText({ as: 'span' }, anyText);
    expect(spanContainer.querySelector('span')).toBeTruthy();
    const { container: paragraphContainer } = setupText({ as: 'p' }, anyText);
    expect(paragraphContainer.querySelector('p')).toBeTruthy();
    const { container: divContainer } = setupText({ as: 'div' }, anyText);
    expect(divContainer.querySelector('div')).toBeTruthy();
  });
});
