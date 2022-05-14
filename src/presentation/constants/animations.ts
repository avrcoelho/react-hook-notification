import { defineAnimationSize } from '../utils/defineAnimationSize';

type TopAndBottomProps = {
  amount: number;
  sizeToAdd: number;
};

export const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: 'spring', bounce: 0, duration: 1 },
};

export const slideRight = {
  initial: { right: -defineAnimationSize() },
  animate: { right: 0 },
  exit: { right: -defineAnimationSize() },
  transition: { type: 'spring', bounce: 0 },
};
export const slideLeft = {
  initial: { left: -defineAnimationSize() },
  animate: { left: 0 },
  exit: { left: -defineAnimationSize() },
  transition: { type: 'spring', bounce: 0 },
};
export const slideBottom = ({
  amount,
  sizeToAdd,
}: TopAndBottomProps): Record<string, unknown> => ({
  initial: { bottom: (-110 - sizeToAdd) * amount },
  animate: { bottom: 0 },
  exit: { bottom: (-110 - sizeToAdd) * amount },
  transition: { type: 'spring', bounce: 0 },
});
export const slideTop = ({
  amount,
  sizeToAdd,
}: TopAndBottomProps): Record<string, unknown> => ({
  initial: { top: (-110 - sizeToAdd) * amount },
  animate: { top: 0 },
  exit: { top: (-110 - sizeToAdd) * amount },
  transition: { type: 'spring', bounce: 0 },
});

const bounceTransationIn = { type: 'spring', bounce: 0.5, duration: 0.5 };
const bounceTransationOut = { type: 'spring', bounce: 0, duration: 0.5 };

export const bounceRight = {
  initial: { right: -defineAnimationSize(), transition: bounceTransationOut },
  animate: { right: 0, transition: bounceTransationIn },
  exit: { right: -defineAnimationSize(), transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};
export const bounceLeft = {
  initial: { left: -defineAnimationSize(), transition: bounceTransationOut },
  animate: { left: 0, transition: bounceTransationIn },
  exit: { left: -defineAnimationSize(), transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};
export const bounceBottom = ({
  amount,
  sizeToAdd,
}: TopAndBottomProps): Record<string, unknown> => ({
  initial: {
    bottom: (-110 - sizeToAdd) * amount,
    transition: bounceTransationOut,
  },
  animate: { bottom: 0, transition: bounceTransationIn },
  exit: {
    bottom: (-110 - sizeToAdd) * amount,
    transition: bounceTransationOut,
  },
  transition: { type: 'spring', bounce: 0 },
});
export const bounceTop = ({
  amount,
  sizeToAdd,
}: TopAndBottomProps): Record<string, unknown> => ({
  initial: {
    top: (-110 - sizeToAdd) * amount,
    transition: bounceTransationOut,
  },
  animate: { top: 0, transition: bounceTransationIn },
  exit: { top: (-110 - sizeToAdd) * amount, transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
});

export const flip = {
  initial: {
    rotateX: 90,
    transformPerspective: 600,
    opacity: 0.2,
    transition: { bounce: 0, type: 'spring', duration: 0.6 },
  },
  animate: {
    rotateX: 0,
    transformPerspective: 600,
    opacity: 1,
    transition: { bounce: 0.6, type: 'spring', duration: 1.5 },
  },
  exit: {
    rotateX: 90,
    opacity: 0.2,
    transformPerspective: 600,
    transition: { bounce: 0, type: 'spring', duration: 0.6 },
  },
};

export const zoom = {
  initial: { scale: 0.3, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.3, opacity: 0 },
  transition: { type: 'spring', bounce: 0 },
};
