import { createStitches } from '@stitches/react';
import { Colors } from '../../constantes/Colors';

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

export const Container = styled('div', {
  position: 'fixed',
  top: '16px',
  right: '16px',
  padding: '20px 16px',
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

  variants: {
    withIcon: {
      true: {
        paddingLeft: '12px',
        width: 'calc(100% - 35px)',
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

export const colorsIcon = {
  'info-colored': Colors.White,
  'warning-colored': Colors.White,
  'success-colored': Colors.White,
  'error-colored': Colors.White,
  'info-light': Colors.Blue,
  'warning-light': Colors.Yellow,
  'success-light': Colors.Green,
  'error-light': Colors.Red,
  'info-dark': Colors.Blue,
  'warning-dark': Colors.Yellow,
  'success-dark': Colors.Green,
  'error-dark': Colors.Red,
};
