/* eslint-disable @typescript-eslint/indent */

import React, {
  FC,
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ComponentBaseProps, Color } from './typing';
import Box from './Box';

type Element = 'ul' | 'ol' | 'dl';

type RenderProps = (selectedItem: any) => ReactNode;

type Item = {
  thumb: string;
  image: string;
};

// ImageSlider
export interface ImageSliderProps extends ComponentBaseProps {
  items: Item[];
  children: ReactNode | RenderProps;
  as?: Element;
}

interface ImageSliderContextInterface {
  items: Item[];
  selectedItemIndex: number;
  setSelectedItemIndex?: (value: number) => void;
}

const ImageSliderStyled = styled.div`
  margin: 0;
  padding: 0;
`;

const ImageSliderContext = createContext<
  ImageSliderContextInterface | undefined
>(undefined);
const { Provider: ImageSliderProvider } = ImageSliderContext;

const ImageSlider = ({ children, items }: ImageSliderProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <Box data-testid="thumb-slider">
      <ImageSliderProvider
        value={{
          items,
          selectedItemIndex,
          setSelectedItemIndex,
        }}
      >
        <ImageSliderStyled data-testid="content-slider">
          {typeof children === 'function'
            ? children(items[selectedItemIndex])
            : children}
        </ImageSliderStyled>
      </ImageSliderProvider>
    </Box>
  );
};

// ThumbList
interface ThumbListProps extends ComponentBaseProps {
  children?: any;
  selectedColor?: Color;
}

const ThumbList: FC<ThumbListProps> = ({ children, selectedColor }) => {
  const { nextControl, prevControl } = children;
  const { items, selectedItemIndex, setSelectedItemIndex } =
    useContext(ImageSliderContext)!;
  let selectedRef: any;

  const handleClick = (event: any) => {
    if (setSelectedItemIndex) {
      setSelectedItemIndex(event.currentTarget.dataset.itemId);
    }
  };

  return (
    <Box display="flex">
      {prevControl && prevControl}
      <Box display="flex" flexDirection="row" overflowX="scroll">
        {items.map((currentItem: Item, currentItemIndex: number) => {
          const ref = useRef(null);
          if (selectedItemIndex === currentItemIndex && ref?.current) {
            selectedRef = ref;
            selectedRef.current.parentElement.scroll({
              left:
                selectedRef.current.offsetLeft -
                selectedRef.current.parentElement.offsetLeft,
              behavior: 'smooth',
            });
          }
          return (
            <Box
              ref={ref}
              pl="1"
              pt="1"
              pr="1"
              bg={
                currentItemIndex === selectedItemIndex
                  ? selectedColor || 'colorGray500'
                  : 'colorGray000'
              }
              key={currentItem.thumb}
              data-item-id={currentItemIndex}
              onClick={handleClick}
            >
              <img alt={currentItem?.thumb} src={currentItem.thumb} />
            </Box>
          );
        })}
      </Box>
      {nextControl && nextControl}
    </Box>
  );
};

ThumbList.defaultProps = {
  children: undefined,
  selectedColor: undefined,
};

ThumbList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      nextControl: PropTypes.node,
      prevControl: PropTypes.node,
    })
  ),
  // eslint-disable-next-line react/forbid-prop-types
  selectedColor: PropTypes.any,
};

// Image
interface ImageProps extends ComponentBaseProps {
  children?: ReactNode;
}

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Image: FC<ImageProps> = () => {
  const { items, selectedItemIndex } = useContext(ImageSliderContext)!;
  return <StyledImage src={items[selectedItemIndex]?.image} />;
};

// Next and Prev Buttons
interface NextPrevButton extends ComponentBaseProps {
  children?: ReactNode;
}

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
`;

const NextButton: FC<NextPrevButton> = ({ children }) => {
  const { items, selectedItemIndex, setSelectedItemIndex } =
    useContext(ImageSliderContext)!;

  const handleClick = useCallback(() => {
    if (setSelectedItemIndex) {
      setSelectedItemIndex(selectedItemIndex + 1)!;
    }
  }, [selectedItemIndex]);

  const disabled = selectedItemIndex === items.length - 1;

  return (
    <ButtonStyled onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

NextButton.defaultProps = { children: undefined };
NextButton.propTypes = { children: PropTypes.node };

const PrevButton: FC<NextPrevButton> = ({ children }) => {
  const { selectedItemIndex, setSelectedItemIndex } =
    useContext(ImageSliderContext)!;

  const handleClick = useCallback(() => {
    if (setSelectedItemIndex) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  }, [selectedItemIndex]);

  const disabled = selectedItemIndex === 0;

  return (
    <ButtonStyled onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

PrevButton.defaultProps = { children: undefined };
PrevButton.propTypes = { children: PropTypes.node };

// Thumb Slider Static Sub Components
ImageSlider.Thumbs = ThumbList;
ImageSlider.Image = Image;
ImageSlider.Next = NextButton;
ImageSlider.Prev = PrevButton;

export default ImageSlider;
