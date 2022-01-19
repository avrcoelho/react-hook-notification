import { globalCss } from '@stitches/react';
import { Colors } from '@/presentation/constants/Colors';
import './inter.css';

export const globalStyles = globalCss({
  ':root': {
    '--rhn-color-light': Colors.White,
    '--rhn-text-color-light': Colors.Grey,
    '--rhn-color-error': Colors.Red,
    '--rhn-color-success': Colors.Green,
    '--rhn-color-info': Colors.Blue,
    '--rhn-color-warning': Colors.Yellow,
    '--rhn-color-dark': Colors.Black,
  },
  '#rhn-container *, #root > *': {
    boxSizing: 'border-box',
    outline: 0,
    fontFamily: "'Inter', sans-serif",
  },

  body: {
    padding: 0,
    margin: 0,
  },
});
