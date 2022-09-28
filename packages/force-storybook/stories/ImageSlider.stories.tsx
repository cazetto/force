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
  other: 'A',
};

const image2 = {
  thumb: 'https://via.placeholder.com/150/a393af',
  image: 'https://via.placeholder.com/600/a393af',
  other: 'B',
};

const mockedData = [
  { ...image1, id: '1', title: 'Image 1' },
  { ...image2, id: '2', title: 'Image 2' },
  { ...image1, id: '3', title: 'Image 3' },
  { ...image2, id: '4', title: 'Image 4' },
  { ...image1, id: '5', title: 'Image 5' },
  { ...image2, id: '6', title: 'Image 6' },
  { ...image1, id: '7', title: 'Image 7' },
  { ...image2, id: '8', title: 'Image 8' },
  { ...image1, id: '9', title: 'Image 9' },
  { ...image2, id: '10', title: 'Image 10' },
  { ...image1, id: '11', title: 'Image 11' },
  { ...image2, id: '12', title: 'Image 12' },
  { ...image1, id: '13', title: 'Image 13' },
  { ...image2, id: '14', title: 'Image 14' },
];

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type Selected = Partial<ArrayElement<typeof mockedData>>;

export const WithChildren = () => (
  <ForceThemeProvider theme={themePrimer} globalStyle={<PrimerGlobalStyle />}>
    <Box>
      <ImageSlider items={mockedData}>
        <Box height='600px' display='flex' justifyContent='center'>
          <ImageSlider.ImageDisplay />
        </Box>
        <Box>
          <ImageSlider.ThumbsList
            selectedColor='colorGray600'
            control={{
              prev: (
                <ImageSlider.PrevButton>
                  <Octicon icon={ChevronLeft} />
                </ImageSlider.PrevButton>
              ),
              next: (
                <ImageSlider.NextButton>
                  <Octicon icon={ChevronRight} />
                </ImageSlider.NextButton>
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
            <ImageSlider.ImageDisplay />
            <Text pl='2' pr='2'>
              Image Title: {selected?.title}
            </Text>
            <Box>
              <ImageSlider.ThumbsList />
              <ImageSlider.PrevButton>
                <Octicon icon={ChevronLeft} />
                PrevButton
              </ImageSlider.PrevButton>
              <ImageSlider.NextButton>
                Next
                <Octicon icon={ChevronRight} />
              </ImageSlider.NextButton>
            </Box>
          </>
        )}
      </ImageSlider>
    </Box>
  </ForceThemeProvider>
);
