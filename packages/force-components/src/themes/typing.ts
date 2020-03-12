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
  warning: string;
  danger: string;
  disabled?: string;
};

export type FontSizes = [string, string, string, string];

export type Sizes = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export interface Theme {
  spaces: Spaces;
  // fontSizes: FontSizes;
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
}
