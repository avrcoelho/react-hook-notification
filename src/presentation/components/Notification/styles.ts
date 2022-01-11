import { createStitches } from '@stitches/react';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 640px)',
  },
});

export const Container = styled('div', {
  position: 'absolute',
  top: '1.6rem',
  right: '1.6rem',
  padding: '2rem 1.6rem',
  backgroundColor: '#ccc',
  borderRadius: '0.4rem',
  display: 'flex',
  flexDirection: 'column',
  width: '30rem',

  '@bp1': {
    width: 'calc(100% - 3.2rem)',
    margin: 'auto',
  },
});

export const Title = styled('strong', {
  color: 'white',
  fontSize: '1.5rem',
  lineHeight: '1.8rem',
  marginBottom: '0.8rem',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const Text = styled('span', {
  color: 'white',
  fontSize: '1.5rem',
  lineHeight: '2rem',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});
