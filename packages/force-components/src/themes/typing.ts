export type Spaces = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
};

export type Variants = {
  primary: string;
  secondary: string;
  tertiary: string;
  info?: string;
  warning: string;
  danger: string;
  disabled?: string;
};

export type Sizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type FontSizes = Sizes;
export type FontWeights = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export interface Theme {
  colors: {};
  breakpoints: Sizes;
  space: Spaces;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  button: {
    colors: {
      hue: Variants;
      contrast: Variants;
      focusedShadow: Variants;
    };
    sizes: {
      font: Sizes;
      padding: Sizes;
      borderWidth: Sizes;
      focusedShadow: Sizes;
    };
  };
  text: {
    colors: Variants;
  };
  borderWidths: Spaces;
}
