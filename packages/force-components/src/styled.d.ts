import { Theme } from './themes/typing';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
