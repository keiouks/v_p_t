import { setElementVars } from '@vanilla-extract/dynamic';
import { themeVar } from '../style/themes.css';
import { theme2 } from '../style/themes';

export const changeTheme = () => {
  setElementVars(document.documentElement, themeVar, theme2);
}