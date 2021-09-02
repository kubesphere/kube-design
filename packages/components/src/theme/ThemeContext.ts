import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { KubedTheme } from './types';

export const useTheme = (): KubedTheme => useContext<KubedTheme>(ThemeContext);
