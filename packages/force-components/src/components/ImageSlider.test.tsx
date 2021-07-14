import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';
import ImageSlider, { ImageSliderProps } from './ImageSlider';

const setup = (props?: ImageSliderProps, children?: ReactNode) => {
  const items = props?.items || []; // ---> Example of logic inside tests? BAD CODE? Fix it...
  return render(
    <ThemeProvider theme={primerTheme}>
      <ImageSlider items={items} {...props}>{children}</ImageSlider>
    </ThemeProvider>
  );
};

describe('Content Slider Component', () => {
  test('should render without errors', () => {
    const ImageSlider = setup();
    expect(ImageSlider.getByTestId('thumb-slider')).toBeTruthy();
  });
});
