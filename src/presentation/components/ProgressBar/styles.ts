import { styled } from '@stitches/react';

export const Container = styled('div', {
  height: '4px',
  backgroundColor: '#fff',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  borderBottomLeftRadius: '5px',
  borderBottomRightRadius: '5px',

  variants: {
    theme: {
      'default-colored': {
        backgroundColor: 'var(--rhn-text-color-light)',
      },
      'info-colored': {
        backgroundColor: 'var(--rhn-color-light)',
      },
      'warning-colored': {
        backgroundColor: 'var(--rhn-color-light)',
      },
      'success-colored': {
        backgroundColor: 'var(--rhn-color-light)',
      },
      'error-colored': {
        backgroundColor: 'var(--rhn-color-light)',
      },
      'default-light': {
        backgroundColor: 'var(--rhn-text-color-light)',
      },
      'info-light': {
        backgroundColor: 'var(--rhn-color-info)',
      },
      'warning-light': {
        backgroundColor: 'var(--rhn-color-warning)',
      },
      'success-light': {
        backgroundColor: 'var(--rhn-color-success)',
      },
      'error-light': {
        backgroundColor: 'var(--rhn-color-error)',
      },
      'default-dark': {
        backgroundColor: 'var(--rhn-color-light)',
      },
      'info-dark': {
        backgroundColor: 'var(--rhn-color-info)',
      },
      'warning-dark': {
        backgroundColor: 'var(--rhn-color-warning)',
      },
      'success-dark': {
        backgroundColor: 'var(--rhn-color-success)',
      },
      'error-dark': {
        backgroundColor: 'var(--rhn-color-error)',
      },
    },
  },
});
