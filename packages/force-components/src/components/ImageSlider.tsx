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
import { ComponentBaseProps } from './typing';
import Box from './Box';

type Element = 'ul' | 'ol' | 'dl';

type RenderProps = (selectedItem: any) => ReactNode;
// ImageSlider
interface ImageSliderProps extends ComponentBaseProps {
  items: [];
  children: ReactNode | RenderProps;
  as?: Element;
}

interface ImageSliderContextInterface {
  items: any[];
  selectedItemIndex: number;
  setSelectedItemIndex?: (value: number) => void;
}

const ImageSliderContext = createContext<
  ImageSliderContextInterface | undefined
>(undefined);
const { Provider: ImageSliderProvider } = ImageSliderContext;

const ImageSlider = ({ children, items }: ImageSliderProps) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  console.log('é function? ');

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
  children?: ReactNode;
}

const ThumbList: FC<ThumbListProps> = () => {
  const { items, selectedItemIndex, setSelectedItemIndex } = useContext(
    ImageSliderContext
  )!;
  let selectedRef: any;

  return (
    <Box width="100%">
      <Box display="flex" flexDirection="row" overflowX="scroll">
        {items.map((currentItem: any, currentItemIndex: number) => {
          const ref = useRef(null);
          if (selectedItemIndex === currentItemIndex) {
            selectedRef = ref;
            selectedRef?.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'end',
              inline: 'start',
            });
          }

          return (
            <Box
              ref={ref}
              pt="3"
              pb="3"
              key={currentItemIndex}
              data-item-id={currentItemIndex}
              onClick={(event: any) => {
                setSelectedItemIndex &&
                  setSelectedItemIndex(
                    parseInt(event.currentTarget.dataset.itemId)
                  )!;
              }}
            >
              <Box
                borderWidth="3"
                borderStyle="solid"
                borderColor={
                  currentItemIndex === selectedItemIndex
                    ? 'colorRed400'
                    : 'colorGray000'
                }
              >
                <img src={currentItem.thumb} />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

// Image
interface ImageProps extends ComponentBaseProps {
  children?: ReactNode;
}

const Image: FC<ImageProps> = () => {
  const { items, selectedItemIndex } = useContext(ImageSliderContext)!;
  return <img width="100%" src={items[selectedItemIndex]['image']} />;
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
