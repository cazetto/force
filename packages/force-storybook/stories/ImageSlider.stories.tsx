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

const mockedData = [
  { ...image1, id: '1' },
  { ...image2, id: '2' },
  { ...image1, id: '3' },
  { ...image2, id: '4' },
  { ...image1, id: '5' },
  { ...image2, id: '6' },
  { ...image1, id: '7' },
  { ...image2, id: '8' },
  { ...image1, id: '9' },
  { ...image2, id: '10' },
  { ...image1, id: '11' },
  { ...image2, id: '12' },
  { ...image2, id: '13' },
  { ...image2, id: '14' },
];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type Selected = Partial<ArrayElement<typeof mockedData>>;

export const WithChildren = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box>
      <ImageSlider items={mockedData}>
        <Box height='400px' display='flex' justifyContent='center'>
          <ImageSlider.Image />
        </Box>
        <Box>
          <ImageSlider.Thumbs
            selectedColor='colorGray600'
            control={{
              prev: (
                <ImageSlider.Prev>
                  <Octicon icon={ChevronLeft} />
                </ImageSlider.Prev>
              ),
              next: (
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
    <Box width='600px'>
      <ImageSlider items={mockedData}>
        {(selected: Selected) => (
          <>
            <ImageSlider.Image />
            <Text pl='2' pr='2'>
              Image Title: {selected?.title}
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
