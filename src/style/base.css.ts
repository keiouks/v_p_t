import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body, div, h1', {
  margin: 0,
  padding: 0,
});

globalStyle('ul', {
  listStyle: 'none'
});