import { Theme } from '../themes/typing';
export interface ComponentBaseProps {
  theme?: Theme;
}
export type Space = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type ResponsiveSpace = {
  sm?: Space;
  xs?: Space;
  md?: Space;
  lg?: Space;
  xl?: Space;
};
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
export type ResponsiveSize = {
  sm?: Size;
  xs?: Size;
  md?: Size;
  lg?: Size;
  xl?: Size;
};
export type Dimention = number | string;
export type ResponsiveDimention = {
  sm?: Dimention;
  xs?: Dimention;
  md?: Dimention;
  lg?: Dimention;
  xl?: Dimention;
};
export type FontWeight =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';
export type Globals = 'inherit' | 'initial' | 'unset';
export type TextAlign =
  | Globals
  | 'center'
  | 'end'
  | 'justify'
  | 'left'
  | 'right'
  | string;

export type LineHeight = 'normal' | number | string;
export type LetterSpacing = 'normal' | string;
export type FontStyle = Globals | 'normal' | 'italic' | 'oblique' | string;
export type VerticalAlign =
  | Globals
  | 'revert'
  | 'baseline'
  | 'bottom'
  | 'middle'
  | 'sub'
  | 'super'
  | 'text-bottom'
  | 'text-top'
  | 'top'
  | string;
export type Display =
  | Globals
  | 'revert'
  | 'block'
  | 'inline'
  | 'run-in'
  | 'flex'
  | 'flow'
  | 'flow-root'
  | 'grid'
  | 'table'
  | 'table-caption'
  | 'table-cell'
  | 'table-column'
  | 'table-column-group'
  | 'table-footer-group'
  | 'table-header-group'
  | 'table-row'
  | 'table-row-group'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-list-item'
  | 'inline-table'
  | 'contents'
  | 'list-item'
  | 'none'
  | string;
export type Overflow =
  | Globals
  | 'visible'
  | 'hidden'
  | 'clip'
  | 'scroll'
  | 'auto'
  | 'hidden visible'
  | string;
export type AlignItems =
  | Globals
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | string;
export type AlignContent =
  | Globals
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'normal'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | string;
export type JustifyItems =
  | Globals
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | 'legacy right'
  | 'legacy left'
  | 'legacy center'
  | string;
export type JustifyContent =
  | Globals
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'normal'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | string;
export type FlexWrap = Globals | 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexDirection =
  | Globals
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse';
export type Flex = Globals | 'auto' | 'none' | number | string;
export type FlexGrow = Globals | number;
export type FlexShrink = Globals | number;
export type FlexBasis =
  | Globals
  | 'auto'
  | 'fill'
  | 'max-content'
  | 'min-content'
  | 'fit-content'
  | 'content'
  | string;
export type JustifySelf =
  | Globals
  | 'auto'
  | 'normal'
  | 'stretch'
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'left'
  | 'right'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'safe center'
  | 'unsafe center'
  | string;
export type AlignSelf =
  | Globals
  | 'auto'
  | 'normal'
  | 'center'
  | 'start'
  | 'end'
  | 'self-start'
  | 'self-end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'stretch'
  | 'safe center'
  | 'unsafe center'
  | string;
export type GridGap = Globals | string;
export type GridRowGap = Globals | string;
export type GridColumnGap = Globals | string;
export type GridColumn = string;
export type GridRow = Globals | 'auto' | string;
export type GridArea = Globals | 'auto' | string;
export type GridAutoFlow =
  | Globals
  | 'row'
  | 'column'
  | 'dense'
  | 'row dense'
  | 'column dense';
export type GridAutoRows =
  | Globals
  | 'min-content'
  | 'max-content'
  | 'auto'
  | string;
export type GridAutoColumns =
  | Globals
  | 'min-content'
  | 'max-content'
  | 'auto'
  | string;
export type GridTemplateRows = Globals | 'none' | string;
export type GridTemplateColumns = Globals | 'none' | string;
export type GridTemplateAreas = Globals | 'none' | string;
export type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
export type Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'warning'
  | 'info';
export type Color =
  | 'colorGray'
  | 'colorGray000'
  | 'colorGray100'
  | 'colorGray200'
  | 'colorGray300'
  | 'colorGray400'
  | 'colorGray500'
  | 'colorGray600'
  | 'colorGray700'
  | 'colorGray800'
  | 'colorGray900'
  | 'colorBlue'
  | 'colorBlue000'
  | 'colorBlue100'
  | 'colorBlue200'
  | 'colorBlue300'
  | 'colorBlue400'
  | 'colorBlue500'
  | 'colorBlue600'
  | 'colorBlue700'
  | 'colorBlue800'
  | 'colorBlue900'
  | 'colorGreen'
  | 'colorGreen000'
  | 'colorGreen100'
  | 'colorGreen200'
  | 'colorGreen300'
  | 'colorGreen400'
  | 'colorGreen500'
  | 'colorGreen600'
  | 'colorGreen700'
  | 'colorGreen800'
  | 'colorGreen900'
  | 'colorYellow'
  | 'colorYellow000'
  | 'colorYellow100'
  | 'colorYellow200'
  | 'colorYellow300'
  | 'colorYellow400'
  | 'colorYellow500'
  | 'colorYellow600'
  | 'colorYellow700'
  | 'colorYellow800'
  | 'colorYellow900'
  | 'colorOrange'
  | 'colorOrange000'
  | 'colorOrange100'
  | 'colorOrange200'
  | 'colorOrange300'
  | 'colorOrange400'
  | 'colorOrange500'
  | 'colorOrange600'
  | 'colorOrange700'
  | 'colorOrange800'
  | 'colorOrange900'
  | 'colorRed'
  | 'colorRed000'
  | 'colorRed100'
  | 'colorRed200'
  | 'colorRed300'
  | 'colorRed400'
  | 'colorRed500'
  | 'colorRed600'
  | 'colorRed700'
  | 'colorRed800'
  | 'colorRed900'
  | 'colorPurple'
  | 'colorPurple000'
  | 'colorPurple100'
  | 'colorPurple200'
  | 'colorPurple300'
  | 'colorPurple400'
  | 'colorPurple500'
  | 'colorPurple600'
  | 'colorPurple700'
  | 'colorPurple800'
  | 'colorPurple900'
  | 'colorPink'
  | 'colorPink000'
  | 'colorPink100'
  | 'colorPink200'
  | 'colorPink300'
  | 'colorPink400'
  | 'colorPink500'
  | 'colorPink600'
  | 'colorPink700'
  | 'colorPink800'
  | 'colorPink900';
export type ResponsiveColor = {
  sm?: Color;
  xs?: Color;
  md?: Color;
  lg?: Color;
  xl?: Color;
};
