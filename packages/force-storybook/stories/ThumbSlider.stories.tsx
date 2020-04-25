import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  ImageSlider,
  Box,
} from 'force-components';

import Octicon, { ChevronLeft, ChevronRight } from '@primer/octicons-react';

export default { title: 'Image Slider' };

const image1 = {
  thumb: 'https://via.placeholder.com/150/e743b',
  image: 'https://via.placeholder.com/600/e743b',
};

const image2 = {
  thumb: 'https://via.placeholder.com/150/a393af',
  image: 'https://via.placeholder.com/600/a393af',
};

https: const mockedData = [
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
  image1,
  image2,
];

export const Simple = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box width="600px">
      <ImageSlider items={mockedData}>
        <ImageSlider.Image />
        <Box>
          <ImageSlider.Thumbs />
          <ImageSlider.Prev>
            <Octicon icon={ChevronLeft} />
            Prev
          </ImageSlider.Prev>
          <ImageSlider.Next>
            Next
            <Octicon icon={ChevronRight} />
          </ImageSlider.Next>
        </Box>
      </ImageSlider>
    </Box>
  </ForceThemeProvider>
);
