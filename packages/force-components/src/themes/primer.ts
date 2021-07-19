import tokens from 'force-tokens';
import { createGlobalStyle, css } from 'styled-components';
import { Theme } from './typing';

const {
  // Colors
  colorGray,
  colorGray000,
  colorGray100,
  colorGray200,
  colorGray300,
  colorGray400,
  colorGray500,
  colorGray600,
  colorGray700,
  colorGray800,
  colorGray900,
  colorBlue,
  colorBlue000,
  colorBlue100,
  colorBlue200,
  colorBlue300,
  colorBlue400,
  colorBlue500,
  colorBlue600,
  colorBlue700,
  colorBlue800,
  colorBlue900,
  colorGreen,
  colorGreen000,
  colorGreen100,
  colorGreen200,
  colorGreen300,
  colorGreen400,
  colorGreen500,
  colorGreen600,
  colorGreen700,
  colorGreen800,
  colorGreen900,
  colorYellow,
  colorYellow000,
  colorYellow100,
  colorYellow200,
  colorYellow300,
  colorYellow400,
  colorYellow500,
  colorYellow600,
  colorYellow700,
  colorYellow800,
  colorYellow900,
  colorOrange,
  colorOrange000,
  colorOrange100,
  colorOrange200,
  colorOrange300,
  colorOrange400,
  colorOrange500,
  colorOrange600,
  colorOrange700,
  colorOrange800,
  colorOrange900,
  colorRed,
  colorRed000,
  colorRed100,
  colorRed200,
  colorRed300,
  colorRed400,
  colorRed500,
  colorRed600,
  colorRed700,
  colorRed800,
  colorRed900,
  colorPurple,
  colorPurple000,
  colorPurple100,
  colorPurple200,
  colorPurple300,
  colorPurple400,
  colorPurple500,
  colorPurple600,
  colorPurple700,
  colorPurple800,
  colorPurple900,
  colorPink,
  colorPink000,
  colorPink100,
  colorPink200,
  colorPink300,
  colorPink400,
  colorPink500,
  colorPink600,
  colorPink700,
  colorPink800,
  colorPink900,
  // Color Text
  colorTextPrimary,
  colorTextSecondary,
  colorTextTertiary,
  colorTextInfo,
  colorTextWarning,
  colorTextDanger,
  // Color Button Backgrounds
  colorButtonHuePrimary,
  colorButtonHueSecondary,
  colorButtonHueTertiary,
  colorButtonHueWarning,
  colorButtonHueDanger,
  colorButtonHueDisabled,
  // Color Button Fonts
  colorButtonContrastPrimary,
  colorButtonContrastSecondary,
  colorButtonContrastTertiary,
  colorButtonContrastWarning,
  colorButtonContrastDanger,
  colorButtonContrastDisabled,
  // Color Button Focused Shadows
  colorButtonFocusedShadowPrimary,
  colorButtonFocusedShadowSecondary,
  colorButtonFocusedShadowTertiary,
  colorButtonFocusedShadowDanger,
  colorButtonFocusedShadowWarning,
  // Size Breakpoints
  sizeBreakpointXs,
  sizeBreakpointSm,
  sizeBreakpointMd,
  sizeBreakpointLg,
  sizeBreakpointXl,
  // Size Text
  sizeTextXs,
  sizeTextSm,
  sizeTextMd,
  sizeTextLg,
  sizeTextXl,
  // Size Font Weight,
  sizeFontWeight100,
  sizeFontWeight200,
  sizeFontWeight300,
  sizeFontWeight400,
  sizeFontWeight500,
  sizeFontWeight600,
  sizeFontWeight700,
  sizeFontWeight800,
  sizeFontWeight900,
  // Size Button Paddings
  sizeButtonPaddingVerticalXs,
  sizeButtonPaddingVerticalSm,
  sizeButtonPaddingVerticalMd,
  sizeButtonPaddingVerticalLg,
  sizeButtonPaddingVerticalXl,
  sizeButtonPaddingHorizontalXs,
  sizeButtonPaddingHorizontalSm,
  sizeButtonPaddingHorizontalMd,
  sizeButtonPaddingHorizontalLg,
  sizeButtonPaddingHorizontalXl,
  // Size Button Font
  sizeButtonFontXs,
  sizeButtonFontSm,
  sizeButtonFontMd,
  sizeButtonFontLg,
  sizeButtonFontXl,
  // Size Button Focused Shadow
  sizeButtonFocusedShadowXs,
  sizeButtonFocusedShadowSm,
  sizeButtonFocusedShadowMd,
  sizeButtonFocusedShadowLg,
  sizeButtonFocusedShadowXl,
  // Size Button Border Width
  sizeButtonBorderWidthXs,
  sizeButtonBorderWidthSm,
  sizeButtonBorderWidthMd,
  sizeButtonBorderWidthLg,
  sizeButtonBorderWidthXl,
  // Size Spacing
  sizeSpacing0,
  sizeSpacing1,
  sizeSpacing2,
  sizeSpacing3,
  sizeSpacing4,
  sizeSpacing5,
  sizeSpacing6,
  sizeSpacing7,
  sizeSpacing8,
  // Size Border Width
  sizeBorderWidth0,
  sizeBorderWidth1,
  sizeBorderWidth2,
  sizeBorderWidth3,
  sizeBorderWidth4,
  sizeBorderWidth5,
  sizeBorderWidth6,
  sizeBorderWidth7,
  sizeBorderWidth8,
} = tokens;

const themePrimer: Theme = {
  colors: {
    colorGray,
    colorGray000,
    colorGray100,
    colorGray200,
    colorGray300,
    colorGray400,
    colorGray500,
    colorGray600,
    colorGray700,
    colorGray800,
    colorGray900,
    colorBlue,
    colorBlue000,
    colorBlue100,
    colorBlue200,
    colorBlue300,
    colorBlue400,
    colorBlue500,
    colorBlue600,
    colorBlue700,
    colorBlue800,
    colorBlue900,
    colorGreen,
    colorGreen000,
    colorGreen100,
    colorGreen200,
    colorGreen300,
    colorGreen400,
    colorGreen500,
    colorGreen600,
    colorGreen700,
    colorGreen800,
    colorGreen900,
    colorYellow,
    colorYellow000,
    colorYellow100,
    colorYellow200,
    colorYellow300,
    colorYellow400,
    colorYellow500,
    colorYellow600,
    colorYellow700,
    colorYellow800,
    colorYellow900,
    colorOrange,
    colorOrange000,
    colorOrange100,
    colorOrange200,
    colorOrange300,
    colorOrange400,
    colorOrange500,
    colorOrange600,
    colorOrange700,
    colorOrange800,
    colorOrange900,
    colorRed,
    colorRed000,
    colorRed100,
    colorRed200,
    colorRed300,
    colorRed400,
    colorRed500,
    colorRed600,
    colorRed700,
    colorRed800,
    colorRed900,
    colorPurple,
    colorPurple000,
    colorPurple100,
    colorPurple200,
    colorPurple300,
    colorPurple400,
    colorPurple500,
    colorPurple600,
    colorPurple700,
    colorPurple800,
    colorPurple900,
    colorPink,
    colorPink000,
    colorPink100,
    colorPink200,
    colorPink300,
    colorPink400,
    colorPink500,
    colorPink600,
    colorPink700,
    colorPink800,
    colorPink900,
  },
  breakpoints: {
    xs: sizeBreakpointXs,
    sm: sizeBreakpointSm,
    md: sizeBreakpointMd,
    lg: sizeBreakpointLg,
    xl: sizeBreakpointXl,
  },
  space: {
    0: sizeSpacing0,
    1: sizeSpacing1,
    2: sizeSpacing2,
    3: sizeSpacing3,
    4: sizeSpacing4,
    5: sizeSpacing5,
    6: sizeSpacing6,
    7: sizeSpacing7,
    8: sizeSpacing8,
  },
  button: {
    colors: {
      hue: {
        primary: colorButtonHuePrimary,
        secondary: colorButtonHueSecondary,
        tertiary: colorButtonHueTertiary,
        warning: colorButtonHueWarning,
        danger: colorButtonHueDanger,
        disabled: colorButtonHueDisabled,
      },
      focusedShadow: {
        primary: colorButtonFocusedShadowPrimary,
        secondary: colorButtonFocusedShadowSecondary,
        tertiary: colorButtonFocusedShadowTertiary,
        danger: colorButtonFocusedShadowDanger,
        warning: colorButtonFocusedShadowWarning,
      },
      contrast: {
        primary: colorButtonContrastPrimary,
        secondary: colorButtonContrastSecondary,
        tertiary: colorButtonContrastTertiary,
        warning: colorButtonContrastWarning,
        danger: colorButtonContrastDanger,
        disabled: colorButtonContrastDisabled,
      },
    },
    sizes: {
      font: {
        xs: sizeButtonFontXs,
        sm: sizeButtonFontSm,
        md: sizeButtonFontMd,
        lg: sizeButtonFontLg,
        xl: sizeButtonFontXl,
      },
      focusedShadow: {
        xs: sizeButtonFocusedShadowXs,
        sm: sizeButtonFocusedShadowSm,
        md: sizeButtonFocusedShadowMd,
        lg: sizeButtonFocusedShadowLg,
        xl: sizeButtonFocusedShadowXl,
      },
      borderWidth: {
        xs: sizeButtonBorderWidthXs,
        sm: sizeButtonBorderWidthSm,
        md: sizeButtonBorderWidthMd,
        lg: sizeButtonBorderWidthLg,
        xl: sizeButtonBorderWidthXl,
      },
      padding: {
        xs: `${sizeButtonPaddingVerticalXs} ${sizeButtonPaddingHorizontalXs}`,
        sm: `${sizeButtonPaddingVerticalSm} ${sizeButtonPaddingHorizontalSm}`,
        md: `${sizeButtonPaddingVerticalMd} ${sizeButtonPaddingHorizontalMd}`,
        lg: `${sizeButtonPaddingVerticalLg} ${sizeButtonPaddingHorizontalLg}`,
        xl: `${sizeButtonPaddingVerticalXl} ${sizeButtonPaddingHorizontalXl}`,
      },
    },
  },

  fontSizes: {
    xs: sizeTextXs,
    sm: sizeTextSm,
    md: sizeTextMd,
    lg: sizeTextLg,
    xl: sizeTextXl,
  },
  fontWeights: {
    /* @TODO - Remove these "replaces" after create a custom
    transformer(style-dictionary) for font-weight in force-token */
    100: sizeFontWeight100.replace(/\D/g, ''),
    200: sizeFontWeight200.replace(/\D/g, ''),
    300: sizeFontWeight300.replace(/\D/g, ''),
    400: sizeFontWeight400.replace(/\D/g, ''),
    500: sizeFontWeight500.replace(/\D/g, ''),
    600: sizeFontWeight600.replace(/\D/g, ''),
    700: sizeFontWeight700.replace(/\D/g, ''),
    800: sizeFontWeight800.replace(/\D/g, ''),
    900: sizeFontWeight900.replace(/\D/g, ''),
  },
  text: {
    colors: {
      primary: colorTextPrimary,
      secondary: colorTextSecondary,
      tertiary: colorTextTertiary,
      warning: colorTextWarning,
      info: colorTextInfo,
      danger: colorTextDanger,
    },
  },
  borderWidths: {
    0: sizeBorderWidth0,
    1: sizeBorderWidth1,
    2: sizeBorderWidth2,
    3: sizeBorderWidth3,
    4: sizeBorderWidth4,
    5: sizeBorderWidth5,
    6: sizeBorderWidth6,
    7: sizeBorderWidth7,
    8: sizeBorderWidth8,
  },
};

const primerDefaultStyle = css`
  html {
    font-family: 'Roboto', sans-serif;
  }
`;

export const PrimerGlobalStyle = createGlobalStyle`
  ${primerDefaultStyle}
`;

export const extendPrimerGlobalStyle = (
  customStyle: typeof primerDefaultStyle
) => createGlobalStyle`
  ${primerDefaultStyle}
  ${customStyle};
`;

export default themePrimer;
