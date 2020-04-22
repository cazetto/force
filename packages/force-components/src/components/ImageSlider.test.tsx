import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../themes/primer';
import ImageSlider from './ImageSlider';

const setupImageSlider = (props?: {}, children?: ReactNode) => {
  return render(
    <ThemeProvider theme={primerTheme}>
      <ImageSlider {...props}>{children}</ImageSlider>
    </ThemeProvider>
  );
};

describe('Content Slider Component', () => {
  test('should render without errors', () => {
    const ImageSlider = setupImageSlider();
    expect(ImageSlider.getByTestId('thumb-slider')).toBeTruthy();
  });
});
