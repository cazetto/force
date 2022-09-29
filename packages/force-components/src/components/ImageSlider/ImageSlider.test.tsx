import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import primerTheme from '../../themes/primer';
import ImageSlider from './ImageSlider';

const image1 = {
  thumb: 'https://via.placeholder.com/150/e743b',
  image: 'https://via.placeholder.com/600/e743b',
  other: 'A',
};

const image2 = {
  thumb: 'https://via.placeholder.com/150/a393af',
  image: 'https://via.placeholder.com/600/a393af',
  other: 'B',
};

const items = [
  { ...image1, id: '1', title: 'Image 1' },
  { ...image2, id: '2', title: 'Image 2' },
];

describe('ImageSlider Component', () => {
  test('renders without crashing', () => {
    const component = render(<ImageSlider items={[]}></ImageSlider>);
    expect(component.getByRole('figure')).toBeInTheDocument();
  });

  test('ImageSlider.ThumbsList renders without crashing', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={items}>
          <ImageSlider.ThumbsList />
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('menu')).toBeInTheDocument();
  });

  test('ImageSlider.ImageDisplay renders without crashing', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={items}>
          <ImageSlider.ImageDisplay />
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('img')).toBeInTheDocument();
  });

  test('ImageSlider.NextButton renders without crashing', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={items}>
          <ImageSlider.NextButton></ImageSlider.NextButton>
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('button')).toBeInTheDocument();
  });

  test('ImageSlider.PrevButton renders without crashing', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={items}>
          <ImageSlider.PrevButton></ImageSlider.PrevButton>
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('button')).toBeInTheDocument();
  });

  test('ImageSlider.ImageDisplay load the first image in the list', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={items}>
          <ImageSlider.ImageDisplay />
        </ImageSlider>
      </ThemeProvider>
    );
    expect(component.getByRole('img')).toHaveAttribute('src', items[0].image);
  });

  test('ImageSlider.ImageThumb renders with the correct number of items', async () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={items}>
          <ImageSlider.ThumbsList />
        </ImageSlider>
      </ThemeProvider>
    );
    const itemsFound = await component.findAllByRole('button');
    expect(itemsFound).toHaveLength(2);
  });

  test('ImageSlider.ImageDisplay shows correspondent image of clicked ImageSlider.Thumbs item', () => {
    const component = render(
      <ThemeProvider theme={primerTheme}>
        <ImageSlider items={items}>
          <ImageSlider.ImageDisplay />
          <ImageSlider.ThumbsList />
        </ImageSlider>
      </ThemeProvider>
    );
    const secondThumb = component.getByAltText(items[1].title);
    userEvent.click(secondThumb);
    expect(component.getAllByRole('img')[0]).toHaveAttribute(
      'src',
      items[1].image
    );
  });
});
