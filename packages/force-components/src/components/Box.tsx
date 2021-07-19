/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode, FC, forwardRef } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {
  color,
  space,
  layout,
  typography,
  flexbox,
  grid,
  position,
  border,
} from 'styled-system';
import {
  ComponentBaseProps,
  Color,
  ResponsiveColor,
  Space,
  ResponsiveSpace,
  Size,
  ResponsiveSize,
  Dimention,
  ResponsiveDimention,
  FontWeight,
  TextAlign,
  FontStyle,
  LineHeight,
  LetterSpacing,
  Display,
  VerticalAlign,
  Overflow,
  AlignItems,
  AlignContent,
  JustifyItems,
  JustifyContent,
  FlexWrap,
  FlexDirection,
  ResponsiveFlexDirection,
  Flex,
  FlexGrow,
  FlexShrink,
  FlexBasis,
  JustifySelf,
  AlignSelf,
  GridGap,
  GridRowGap,
  GridColumnGap,
  GridColumn,
  GridRow,
  GridArea,
  GridAutoFlow,
  GridAutoRows,
  GridTemplateRows,
  GridTemplateColumns,
  GridTemplateAreas,
  Position,
  Globals,
} from './typing';

interface BoxProps extends ComponentBaseProps {
  children?: ReactNode;
  // Color (styled-system)
  bg?: Color | ResponsiveColor;
  color?: Color | ResponsiveColor;
  opacity?: number;
  // Typography (styled-system)
  fontSize?: Size | ResponsiveSize;
  fontWeight?: FontWeight;
  lineHeight?: LineHeight;
  letterSpacing?: LetterSpacing;
  textAlign?: TextAlign;
  fontStyle?: FontStyle;
  // Layout (styled-system)
  width?: Dimention | ResponsiveDimention;
  height?: Dimention | ResponsiveDimention;
  minWidth?: Dimention | ResponsiveDimention;
  maxWidth?: Dimention | ResponsiveDimention;
  minHeight?: Dimention | ResponsiveDimention;
  maxHeight?: Dimention | ResponsiveDimention;
  size?: Dimention | ResponsiveDimention;
  display?: Display;
  verticalAlign?: VerticalAlign;
  overflow?: Overflow;
  overflowX?: Overflow;
  overflowY?: Overflow;
  // Flexbox (styled-system)
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  justifyItems?: JustifyItems;
  justifyContent?: JustifyContent;
  flexWrap?: FlexWrap;
  flexDirection?: FlexDirection | ResponsiveFlexDirection;
  flex?: Flex;
  flexGrow?: FlexGrow;
  flexShrink?: FlexShrink;
  flexBasis?: FlexBasis;
  justifySelf?: JustifySelf;
  alignSelf?: AlignSelf;
  order?: number | string;
  // Grid (styled-system)
  gridGap?: GridGap;
  gridRowGap?: GridRowGap;
  gridColumnGap?: GridColumnGap;
  gridColumn?: GridColumn;
  gridRow?: GridRow;
  gridArea?: GridArea;
  gridAutoFlow?: GridAutoFlow;
  gridAutoRows?: GridAutoRows;
  gridTemplateRows?: GridTemplateRows;
  gridTemplateColumns?: GridTemplateColumns;
  gridTemplateAreas?: GridTemplateAreas;
  // Position (styled-system)
  position?: Position;
  zIndex?: number | string;
  top?: Globals | number | string;
  right?: Globals | number | string;
  bottom?: Globals | number | string;
  left?: Globals | number | string;
  // Border (styled-system)
  borderWidth?: Space;
  borderColor?: Color;
  borderStyle?: 'solid';
  // Space (styled-system)
  m?: Space | ResponsiveSpace;
  mt?: Space | ResponsiveSpace;
  mr?: Space | ResponsiveSpace;
  mb?: Space | ResponsiveSpace;
  ml?: Space | ResponsiveSpace;
  mx?: Space | ResponsiveSpace;
  my?: Space | ResponsiveSpace;
  p?: Space | ResponsiveSpace;
  pt?: Space | ResponsiveSpace;
  pr?: Space | ResponsiveSpace;
  pb?: Space | ResponsiveSpace;
  pl?: Space | ResponsiveSpace;
  px?: Space | ResponsiveSpace;
  py?: Space | ResponsiveSpace;
  ref?: any;
  onClick?: any;
}

const StyledBox = styled.div.attrs(() => {})`  
  box-sizing: border-box;
  ${color}
  ${space}
  ${layout}
  ${typography}
  ${flexbox}
  ${grid}
  ${position}
  ${border}
`;

const Box: FC<BoxProps> = forwardRef<HTMLElement, BoxProps>(
  ({ children, ...rest }, ref) => (
    <StyledBox {...rest} ref={ref}>
      {children}
    </StyledBox>
  ),
);

Box.defaultProps = {
  children: undefined,
};

Box.propTypes = {
  children: PropTypes.node,
};

export default Box;
