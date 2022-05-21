import { styled } from '@stitches/react';
import { motion } from 'framer-motion';
import { Colors } from '../../constants/Colors';

const themeLight = {
  color: 'var(--rhn-text-color-light)',
  backgroundColor: 'var(--rhn-color-light)',
};

const themeDark = {
  color: 'var(--rhn-color-light)',
  backgroundColor: 'var(--rhn-color-dark)',
};

const borderNone = {
  border: 'none',
};

const borderDefault = {
  borderLeft: '5px solid',
};

export const Container = styled(motion.div, {
  padding: '12px 12px',
  backgroundColor: '#ccc',
  borderRadius: '5px',
  display: 'flex',
  width: '100%',
  position: 'relative',
  boxSizing: 'border-box',
  boxShadow: '0 1px 10px 0 rgb(0 0 0 / 10%), 0 2px 15px 0 rgb(0 0 0 / 5%)',
  cursor: 'default',

  '& + div': {
    marginTop: '12px',
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
    borderColor: {
      'default-colored': borderNone,
      'info-colored': borderNone,
      'warning-colored': borderNone,
      'success-colored': borderNone,
      'error-colored': borderNone,
      'no-border': borderNone,
      'default-light': { ...borderDefault, borderLeftColor: Colors.Grey },
      'info-light': { ...borderDefault, borderLeftColor: Colors.Blue },
      'warning-light': { ...borderDefault, borderLeftColor: Colors.Yellow },
      'success-light': { ...borderDefault, borderLeftColor: Colors.Green },
      'error-light': { ...borderDefault, borderLeftColor: Colors.Red },
      'default-dark': { ...borderDefault, borderLeftColor: Colors.Grey },
      'info-dark': { ...borderDefault, borderLeftColor: Colors.Blue },
      'warning-dark': { ...borderDefault, borderLeftColor: Colors.Yellow },
      'success-dark': { ...borderDefault, borderLeftColor: Colors.Green },
      'error-dark': { ...borderDefault, borderLeftColor: Colors.Red },
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
  lineHeight: '19px',
  marginBottom: '8px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  boxOrient: 'vertical',
});

export const Text = styled('span', {
  fontSize: '15px',
  lineHeight: '19px',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  boxOrient: 'vertical',
});

export const ButtonClose = styled('button', {
  width: '16px',
  height: '16px',
  fontSize: 0,
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
    color: {
      colored: {
        backgroundColor: 'var(--rhn-color-light)',
      },
      light: {
        backgroundColor: 'var(--rhn-text-color-light)',
      },
      dark: {
        backgroundColor: 'var(--rhn-color-light)',
      },
    },
  },
});
