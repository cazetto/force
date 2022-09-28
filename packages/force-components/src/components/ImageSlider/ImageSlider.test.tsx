import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../../themes/primer';
import ImageSlider from './ImageSlider';

describe('Image Slider Component', () => {
  test('ImageSlider renders without crashing', () => {
    const component = render(<ImageSlider items={[]}></ImageSlider>);
    expect(component.getByRole('img')).toBeInTheDocument();
  });

  test('ImageSlider.Thumbs renders without crashing', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={[]}>
          <ImageSlider.ThumbsList />
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('list')).toBeInTheDocument();
  });

  test('ImageSlider.NextButton renders without crashing', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={[]}>
          <ImageSlider.NextButton></ImageSlider.NextButton>
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('button')).toBeInTheDocument();
  });

  test('ImageSlider.PrevButton renders without crashing', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={[]}>
          <ImageSlider.PrevButton></ImageSlider.PrevButton>
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('button')).toBeInTheDocument();
  });
});
