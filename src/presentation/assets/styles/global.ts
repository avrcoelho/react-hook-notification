import { globalCss } from '@stitches/react';
import './inter.css';

export const globalStyles = globalCss({
  ':root': {},
  '#rhn-container *, #root > *': {
    boxSizing: 'border-box',
    outline: 0,
    fontFamily: "'Inter', sans-serif",
  },
});
