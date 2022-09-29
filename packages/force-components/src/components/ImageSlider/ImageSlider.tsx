import React, {
  ReactNode,
  createContext,
  useState,
  useContext,
  useCallback,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ComponentBaseProps, Color } from '../typing';
import Box from '../Box';

type RenderProps = (selectedItem: Item) => ReactNode;

type Item = {
  id?: string;
  thumb: string;
  image: string;
  title?: string;
};

export interface ImageSliderProps extends ComponentBaseProps {
  items: Item[];
  children?: ReactNode | RenderProps;
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

function ImageSlider({ children, items }: ImageSliderProps): JSX.Element {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <Box role="figure">
      <ImageSliderProvider
        value={{
          items,
          selectedItemIndex,
          setSelectedItemIndex,
        }}
      >
        <>
          {typeof children === 'function'
            ? children(items[selectedItemIndex])
            : children}
        </>
      </ImageSliderProvider>
    </Box>
  );
}

interface ThumbListControl {
  next?: ReactNode;
  prev?: ReactNode;
}

interface ThumbListProps extends ComponentBaseProps {
  control?: ThumbListControl;
  selectedColor?: Color;
}

function Thumbs({ control, selectedColor }: ThumbListProps): JSX.Element {
  const nextControl = control?.next;
  const prevControl = control?.prev;
  const { items, selectedItemIndex, setSelectedItemIndex } =
    useContext(ImageSliderContext)!;

  let selectedRef: React.RefObject<HTMLElement>;

  const handleClick = (event: React.SyntheticEvent<HTMLElement>) => {
    if (setSelectedItemIndex) {
      const itemId = event.currentTarget.dataset.itemId;
      setSelectedItemIndex(Number(itemId));
    }
  };

  return (
    <Box display="flex" role="menu">
      {prevControl && prevControl}
      <Box display="flex" flexDirection="row" overflowX="scroll">
        {items.map((currentItem: Item, currentItemIndex: number) => {
          const ref = useRef<HTMLElement | null>(null);
          if (selectedItemIndex === currentItemIndex && ref?.current) {
            selectedRef = ref;
            if (
              selectedRef.current &&
              selectedRef.current.parentElement &&
              selectedRef.current.parentElement.scroll
            ) {
              selectedRef.current.parentElement.scroll({
                left:
                  selectedRef.current.offsetLeft -
                  selectedRef.current.parentElement.offsetLeft,
                behavior: 'smooth',
              });
            }
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
              borderWidth="0"
              key={currentItem.id || currentItemIndex.toString()}
              data-item-id={currentItemIndex}
              as="button"
              role="button"
              onClick={handleClick}
            >
              <img alt={currentItem?.title} src={currentItem.thumb} />
            </Box>
          );
        })}
      </Box>
      {nextControl && nextControl}
    </Box>
  );
}

Thumbs.propTypes = {
  control: PropTypes.shape({
    next: PropTypes.node,
    prev: PropTypes.node,
  }),
};

// Image
const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

function Image(): JSX.Element {
  const { items, selectedItemIndex } = useContext(ImageSliderContext)!;
  return <StyledImage role="img" src={items[selectedItemIndex]?.image} />;
}

// Next and Prev Buttons
const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
`;

function Next({ children }: React.PropsWithChildren): JSX.Element {
  const { items, selectedItemIndex, setSelectedItemIndex } =
    useContext(ImageSliderContext)!;

  const handleClick = useCallback(() => {
    if (setSelectedItemIndex) {
      setSelectedItemIndex(selectedItemIndex + 1)!;
    }
  }, [selectedItemIndex]);

  const disabled = selectedItemIndex === items.length - 1;

  return (
    <ButtonStyled role="button" onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
}

Next.propTypes = { children: PropTypes.node };

function Prev({ children }: React.PropsWithChildren) {
  const { selectedItemIndex, setSelectedItemIndex } =
    useContext(ImageSliderContext)!;

  const handleClick = useCallback(() => {
    if (setSelectedItemIndex) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  }, [selectedItemIndex]);

  const disabled = selectedItemIndex === 0;

  return (
    <ButtonStyled role="button" onClick={handleClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
}

Prev.propTypes = { children: PropTypes.node };

// Static Sub Components
ImageSlider.ThumbsList = Thumbs;
ImageSlider.ImageDisplay = Image;
ImageSlider.NextButton = Next;
ImageSlider.PrevButton = Prev;

export default ImageSlider;
