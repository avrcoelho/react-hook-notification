import { createStitches } from '@stitches/react';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 640px)',
  },
});

export const Container = styled('ol', {
  width: '350px',
  position: 'fixed',
  zIndex: 9999999,
  listStyle: 'none',

  '@bp1': {
    width: 'calc(100% - 32px)',
    margin: 'auto',
  },

  variants: {
    position: {
      'top-right': {
        top: '16px',
        right: '16px',
      },
      'top-center': {
        top: '16px',
        left: 0,
        right: 0,
        margin: 'auto',
      },
      'top-left': {
        top: '16px',
        left: '16px',
      },
      'bottom-right': {
        bottom: '16px',
        right: '16px',
      },
      'bottom-center': {
        bottom: '16px',
        left: 0,
        right: 0,
        margin: 'auto',
      },
      'bottom-left': {
        bottom: '16px',
        left: '16px',
      },
    },
  },
});
