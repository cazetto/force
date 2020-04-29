import React, {
  FC,
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
  useRef,
} from 'react';
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
interface ImageSliderProps extends ComponentBaseProps {
  items: Item[];
  children: ReactNode | RenderProps;
  as?: Element;
}

interface ImageSliderContextInterface {
  items: Item[];
  selectedItemIndex: number;
  setSelectedItemIndex?: (value: number) => void;
}

const ImageSliderContext = createContext<
  ImageSliderContextInterface | undefined
>(undefined);
const { Provider: ImageSliderProvider } = ImageSliderContext;

const ImageSlider = ({ children, items }: ImageSliderProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
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
  );
};

const ImageSliderStyled = styled.div`
  margin: 0;
  padding: 0;
`;

// ThumbList
interface ThumbListProps extends ComponentBaseProps {
  children: { nextControl: ReactNode; prevControl: ReactNode };
  selectedColor?: Color;
}

const ThumbList: FC<ThumbListProps> = ({ children, selectedColor }) => {
  const { nextControl, prevControl } = children;
  const { items, selectedItemIndex, setSelectedItemIndex } = useContext(
    ImageSliderContext
  )!;
  let selectedRef: any;

  return (
    <Box display="flex">
      {prevControl && prevControl}
      <Box display="flex" flexDirection="row" overflowX="scroll">
        {items.map((currentItem: any, currentItemIndex: number) => {
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
              key={currentItemIndex}
              data-item-id={currentItemIndex}
              onClick={(event: any) => {
                setSelectedItemIndex &&
                  setSelectedItemIndex(
                    parseInt(event.currentTarget.dataset.itemId)
                  )!;
              }}
            >
              <img src={currentItem.thumb} />
            </Box>
          );
        })}
      </Box>
      {nextControl && nextControl}
    </Box>
  );
};

// Image
interface ImageProps extends ComponentBaseProps {
  children?: ReactNode;
}

const Image: FC<ImageProps> = () => {
  const { items, selectedItemIndex } = useContext(ImageSliderContext)!;
  return <StyledImage src={items[selectedItemIndex]['image']} />;
};

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

// Next and Prev Buttons
interface NextPrevButton extends ComponentBaseProps {
  children?: ReactNode;
}

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
`;

const NextButton: FC<NextPrevButton> = ({ children }) => {
  const { items, selectedItemIndex, setSelectedItemIndex } = useContext(
    ImageSliderContext
  )!;

  const handleClick = useCallback(() => {
    setSelectedItemIndex && setSelectedItemIndex(selectedItemIndex + 1)!;
  }, [selectedItemIndex]);

  const disabled = selectedItemIndex === items.length - 1;

  return (
    <ButtonStyled onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

const PrevButton: FC<NextPrevButton> = ({ children }) => {
  const { selectedItemIndex, setSelectedItemIndex } = useContext(
    ImageSliderContext
  )!;

  const handleClick = useCallback(() => {
    setSelectedItemIndex && setSelectedItemIndex(selectedItemIndex - 1)!;
  }, [selectedItemIndex]);

  const disabled = selectedItemIndex === 0;

  return (
    <ButtonStyled onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

// Thumb Slider Static Sub Components
ImageSlider.Thumbs = ThumbList;
ImageSlider.Image = Image;
ImageSlider.Next = NextButton;
ImageSlider.Prev = PrevButton;

export default ImageSlider;
