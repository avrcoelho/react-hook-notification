import { globalCss } from '@stitches/react';
import './inter.css';

export const globalStyles = globalCss({
  ':root': {
    '--rhn-color-light': '#fff',
    '--rhn-text-color-light': '#757575',
    '--rhn-color-error': '#e74c3c',
    '--rhn-color-success': '#07bc0c',
    '--rhn-color-info': '#3498db',
    '--rhn-color-warning': '#f1c40f',
    '--rhn-color-dark': '#121212',
  },
  '#rhn-container *, #root > *': {
    boxSizing: 'border-box',
    outline: 0,
    fontFamily: "'Inter', sans-serif",
  },
});
