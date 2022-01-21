import { createStitches } from '@stitches/react';

import { NotificationPositions } from '@/presentation/constants/NotificationPositions';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 640px)',
  },
});

export const Container = styled('div', {
  width: '350px',
  position: 'fixed',

  '@bp1': {
    width: 'calc(100% - 32px)',
    margin: 'auto',
  },

  variants: {
    position: {
      [NotificationPositions.TopRight]: {
        top: '16px',
        right: '16px',
      },
      [NotificationPositions.TopCenter]: {
        top: '16px',
        left: 0,
        right: 0,
        margin: 'auto',
      },
      [NotificationPositions.TopLeft]: {
        top: '16px',
        left: '16px',
      },
      [NotificationPositions.BottomRight]: {
        bottom: '16px',
        right: '16px',
      },
      [NotificationPositions.BottomCenter]: {
        bottom: '16px',
        left: 0,
        right: 0,
        margin: 'auto',
      },
      [NotificationPositions.BottomLeft]: {
        bottom: '16px',
        left: '16px',
      },
    },
  },
});
