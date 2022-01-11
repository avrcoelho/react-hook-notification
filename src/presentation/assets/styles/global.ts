import { globalCss } from '@stitches/react';
import './inter.css';

export const globalStyles = globalCss({
  ':root': {
    fontSize: '10px',
  },
  '*': { margin: 0, padding: 0, boxSizing: 'border-box', outline: 0 },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: '1.6rem',
  },
});
