import { createStitches } from '@stitches/react';
import { motion } from 'framer-motion';

const { styled } = createStitches({
  media: {
    bp1: '(max-width: 640px)',
  },
});

const themeLight = {
  color: 'var(--rhn-text-color-light)',
  backgroundColor: 'var(--rhn-color-light)',
};

const themeDark = {
  color: 'var(--rhn-color-light)',
  backgroundColor: 'var(--rhn-color-dark)',
};

export const Container = styled(motion.div, {
  position: 'fixed',
  top: '16px',
  right: '16px',
  padding: '12px 12px',
  backgroundColor: '#ccc',
  borderRadius: '5px',
  display: 'flex',
  width: '350px',
  boxShadow: '0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%)',

  '@bp1': {
    width: 'calc(100% - 32px)',
    margin: 'auto',
  },

  variants: {
    theme: {
      'default-colored': {
        backgroundColor: 'var(--rhn-color-light)',
        color: 'var(--rhn-text-color-light)',
      },
      'info-colored': {
        backgroundColor: 'var(--rhn-color-info)',
        color: 'var(--rhn-color-light)',
      },
      'warning-colored': {
        backgroundColor: 'var(--rhn-color-warning)',
        color: 'var(--rhn-color-light)',
      },
      'success-colored': {
        backgroundColor: 'var(--rhn-color-success)',
        color: 'var(--rhn-color-light)',
      },
      'error-colored': {
        backgroundColor: 'var(--rhn-color-error)',
        color: 'var(--rhn-color-light)',
      },
      'default-light': themeLight,
      'info-light': themeLight,
      'warning-light': themeLight,
      'success-light': themeLight,
      'error-light': themeLight,
      'default-dark': themeDark,
      'info-dark': themeDark,
      'warning-dark': themeDark,
      'success-dark': themeDark,
      'error-dark': themeDark,
    },
  },
});

export const IconContainer = styled('div', {
  width: '23px',
  height: '23px',
  flexShrink: 0,
});

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  variants: {
    withIcon: {
      true: {
        paddingLeft: '8px',
        width: 'calc(100% - 31px)',
      },
      false: {
        width: '100%',
      },
    },
  },
});

export const Title = styled('strong', {
  fontSize: '15px',
  lineHeight: '18px',
  marginBottom: '8px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const Text = styled('span', {
  fontSize: '14px',
  lineHeight: '20px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

export const ButtonClose = styled('button', {
  width: '16px',
  height: '16px',
  fontSize: 0,
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
  right: 0,
  top: 0,
  position: 'absolute',
  padding: 0,
  opacity: 0.7,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomLeftRadius: '4px',
  borderTopRightRadius: '4px',
  transition: '0.2s opacity',

  '&:hover': {
    opacity: 1,
  },

  variants: {
    theme: {
      colored: {
        backgroundColor: 'var(--rhn-color-light)',
      },
      light: {
        backgroundColor: 'var(--rhn-color-dark)',
      },
      dark: {
        backgroundColor: 'var(--rhn-color-light)',
      },
    },
  },
});
