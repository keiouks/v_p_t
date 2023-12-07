import { style } from '@vanilla-extract/css';
import { themeVar } from '../style/themes.css';

export const diadialogStyle = style({
  background: themeVar.bg.page,
  width: '200px',
  height: '200px',
  cursor: 'pointer',
});