import { style } from '@vanilla-extract/css';
import { themeVar } from '../style/themes.css';

export const buttonStyle = style({
  background: themeVar.bg.card,
  color: themeVar.text.h1,
  cursor: 'pointer',
});