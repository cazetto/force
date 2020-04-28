import React from 'react';
import {
  ForceThemeProvider,
  PrimerGlobalStyle,
  themePrimer,
  ImageSlider,
  Box,
  Text,
} from 'force-components';

import Octicon, { ChevronLeft, ChevronRight } from '@primer/octicons-react';

export default { title: 'Image Slider' };

const image1 = {
  thumb: 'https://via.placeholder.com/150/e743b',
  image: 'https://via.placeholder.com/600/e743b',
  title: 'Image A',
  other: 'A',
};

const image2 = {
  thumb: 'https://via.placeholder.com/150/a393af',
  image: 'https://via.placeholder.com/600/a393af',
  title: 'Image B',
  other: 'B',
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

export const WithChildren = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box>
      <ImageSlider items={mockedData}>
        <Box height="400px" display="flex" justifyContent="center">
          <ImageSlider.Image />
        </Box>
        <Box>
          <ImageSlider.Thumbs
            selectedColor="colorGray600"
            children={{
              prevControl: (
                <ImageSlider.Prev>
                  <Octicon icon={ChevronLeft} />
                </ImageSlider.Prev>
              ),
              nextControl: (
                <ImageSlider.Next>
                  <Octicon icon={ChevronRight} />
                </ImageSlider.Next>
              ),
            }}
          />
        </Box>
      </ImageSlider>
    </Box>
  </ForceThemeProvider>
);

export const WithRenderProps = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box width="600px">
      <ImageSlider items={mockedData}>
        {(selected: any) => (
          <>
            <ImageSlider.Image />
            <Text pl="2" pr="2">
              Image Title: {selected.title}
            </Text>
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
          </>
        )}
      </ImageSlider>
    </Box>
  </ForceThemeProvider>
);
