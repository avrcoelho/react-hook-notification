import { createStitches } from '@stitches/react';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 640px)',
  },
});

export const Container = styled('div', {
  position: 'absolute',
  top: '16px',
  right: '16px',
  padding: '20px 16px',
  backgroundColor: '#ccc',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  width: '320px',

  '@bp1': {
    width: 'calc(100% - 32px)',
    margin: 'auto',
  },
});

export const Title = styled('strong', {
  color: 'white',
  fontSize: '15px',
  lineHeight: '18px',
  marginBottom: '8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const Text = styled('span', {
  color: 'white',
  fontSize: '15px',
  lineHeight: '20px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});
