import {
  createGlobalThemeContract,
  createGlobalTheme,
} from '@vanilla-extract/css';
import { mode, theme1 } from './themes';
import './base.css';

export const themeVar = createGlobalThemeContract(mode, (value) => `moo-ct-${value}`);

createGlobalTheme(':root', themeVar, theme1);

