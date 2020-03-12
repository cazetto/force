import tokens from 'force-tokens';
import { Theme } from './typing';

const {
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
  sizeSpacing8
} = tokens;

const themePrimer: Theme = {
  spaces: [
    sizeSpacing0,
    sizeSpacing1,
    sizeSpacing2,
    sizeSpacing3,
    sizeSpacing4,
    sizeSpacing5,
    sizeSpacing6,
    sizeSpacing7,
    sizeSpacing8
  ],
  button: {
    colors: {
      hue: {
        primary: colorButtonHuePrimary,
        secondary: colorButtonHueSecondary,
        tertiary: colorButtonHueTertiary,
        warning: colorButtonHueWarning,
        danger: colorButtonHueDanger,
        disabled: colorButtonHueDisabled
      },
      focusedShadow: {
        primary: colorButtonFocusedShadowPrimary,
        secondary: colorButtonFocusedShadowSecondary,
        tertiary: colorButtonFocusedShadowTertiary,
        danger: colorButtonFocusedShadowDanger,
        warning: colorButtonFocusedShadowWarning
      },
      contrast: {
        primary: colorButtonContrastPrimary,
        secondary: colorButtonContrastSecondary,
        tertiary: colorButtonContrastTertiary,
        warning: colorButtonContrastWarning,
        danger: colorButtonContrastDanger,
        disabled: colorButtonContrastDisabled
      }
    },
    sizes: {
      font: {
        xs: sizeButtonFontXs,
        sm: sizeButtonFontSm,
        md: sizeButtonFontMd,
        lg: sizeButtonFontLg,
        xl: sizeButtonFontXl
      },
      focusedShadow: {
        xs: sizeButtonFocusedShadowXs,
        sm: sizeButtonFocusedShadowSm,
        md: sizeButtonFocusedShadowMd,
        lg: sizeButtonFocusedShadowLg,
        xl: sizeButtonFocusedShadowXl
      },
      borderWidth: {
        xs: sizeButtonBorderWidthXs,
        sm: sizeButtonBorderWidthSm,
        md: sizeButtonBorderWidthMd,
        lg: sizeButtonBorderWidthLg,
        xl: sizeButtonBorderWidthXl
      },
      padding: {
        xs: `${sizeButtonPaddingVerticalXs} ${sizeButtonPaddingHorizontalXs}`,
        sm: `${sizeButtonPaddingVerticalSm} ${sizeButtonPaddingHorizontalSm}`,
        md: `${sizeButtonPaddingVerticalMd} ${sizeButtonPaddingHorizontalMd}`,
        lg: `${sizeButtonPaddingVerticalLg} ${sizeButtonPaddingHorizontalLg}`,
        xl: `${sizeButtonPaddingVerticalXl} ${sizeButtonPaddingHorizontalXl}`
      }
    }
  }
};

export default themePrimer;

// const themePrimer = {
//   breakpoints: [32, 48, 64],
//   space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
//   fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
//   fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
//   lineHeights: {
//     solid: 1,
//     title: 1.25,
//     copy: 1.5
//   },
//   letterSpacings: {
//     normal: 'normal',
//     tracked: '0.1em',
//     tight: '-0.05em',
//     mega: '0.25em'
//   },
//   fonts: {
//     serif: 'athelas, georgia, times, serif',
//     sansSerif:
//       '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
//   },
//   borders: [
//     0,
//     '1px solid',
//     '2px solid',
//     '4px solid',
//     '8px solid',
//     '16px solid',
//     '32px solid'
//   ],
//   radii: [0, 2, 4, 16, 9999, '100%'],
//   width: [16, 32, 64, 128, 256],
//   heights: [16, 32, 64, 128, 256],
//   maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
//   colors: {
//     danger: 'red',
//     warning: 'yellow',

//     black: '#000',
//     'near-black': '#111',
//     'dark-gray': '#333',
//     'mid-gray': '#555',
//     gray: ' #777',
//     silver: '#999',
//     'light-silver': '#aaa',
//     'moon-gray': '#ccc',
//     'light-gray': '#eee',
//     'near-white': '#f4f4f4',
//     white: '#fff',
//     transparent: 'transparent',
//     blacks: [
//       'rgba(0,0,0,.0125)',
//       'rgba(0,0,0,.025)',
//       'rgba(0,0,0,.05)',
//       'rgba(0,0,0,.1)',
//       'rgba(0,0,0,.2)',
//       'rgba(0,0,0,.3)',
//       'rgba(0,0,0,.4)',
//       'rgba(0,0,0,.5)',
//       'rgba(0,0,0,.6)',
//       'rgba(0,0,0,.7)',
//       'rgba(0,0,0,.8)',
//       'rgba(0,0,0,.9)'
//     ],
//     whites: [
//       'rgba(255,255,255,.0125)',
//       'rgba(255,255,255,.025)',
//       'rgba(255,255,255,.05)',
//       'rgba(255,255,255,.1)',
//       'rgba(255,255,255,.2)',
//       'rgba(255,255,255,.3)',
//       'rgba(255,255,255,.4)',
//       'rgba(255,255,255,.5)',
//       'rgba(255,255,255,.6)',
//       'rgba(255,255,255,.7)',
//       'rgba(255,255,255,.8)',
//       'rgba(255,255,255,.9)'
//     ]
//     // ... and so on
//   }
// };

// export default themePrimer;
