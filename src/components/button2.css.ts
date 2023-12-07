import { style } from '@vanilla-extract/css';
import { themeVar } from '../style/themes.css';

export const buttonStyle = style({
  background: themeVar.bg.page,
  color: themeVar.text.h1,
  cursor: 'pointer',
});

export const normalButtonStyle = style([buttonStyle, {
  display: 'inline-block',
  width: '100px',
  height: '50px',
}]);

export const dialogButtonStyle = style([buttonStyle, {
  display: 'block',
  width: '100%',
  height: '50px',
  background: themeVar.bg.card,
}]);