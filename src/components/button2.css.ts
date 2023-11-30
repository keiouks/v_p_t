import { style } from '@vanilla-extract/css';
import { themeVar } from '../style/themes.css';

export const buttonStyle = style({
  background: themeVar.bg.page,
  color: themeVar.text.h1,
  cursor: 'pointer',
});