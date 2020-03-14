export type Spaces = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string
];

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
  spaces: Spaces;
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
}
