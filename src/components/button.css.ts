import { style } from '@vanilla-extract/css';
import { themeVar } from '../style/themes.css';
import { diadialogStyle } from './dialog.css';

export const buttonStyle = style({
  background: themeVar.bg.card,
  color: themeVar.text.h1,
  cursor: 'pointer',
});

export const buttonDialogStyle = style([buttonStyle, style({
  selectors: {
    [`${diadialogStyle} &`]: {
      display: 'block',
      color: 'green',
      width: '100%',
    }
  }
})])
//   {
  // display: 'block',
  // color: 'green',
  // width: '100%',
// });