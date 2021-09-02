import 'styled-components';
import { KubedTheme } from './types';

declare module 'styled-components' {
  export interface DefaultTheme extends KubedTheme {}
}
