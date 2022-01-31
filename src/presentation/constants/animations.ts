const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: 'spring', bounce: 0, duration: 1 },
};

const setAnimationPosition = (): number => {
  const windowWidth = window.innerWidth;
  const windowIsLarger = windowWidth > 640;
  return windowIsLarger ? 380 : windowWidth;
};

const slideRight = {
  initial: { right: -setAnimationPosition() },
  animate: { right: 0 },
  exit: { right: -setAnimationPosition() },
  transition: { type: 'spring', bounce: 0 },
};
const slideLeft = {
  initial: { left: -setAnimationPosition() },
  animate: { left: 0 },
  exit: { left: -setAnimationPosition() },
  transition: { type: 'spring', bounce: 0 },
};
const slideBottom = (index: number): Record<string, unknown> => ({
  initial: { bottom: -110 * index },
  animate: { bottom: 0 },
  exit: { bottom: -110 * index },
  transition: { type: 'spring', bounce: 0 },
});
const slideTop = (index: number): Record<string, unknown> => ({
  initial: { top: -110 * index },
  animate: { top: 0 },
  exit: { top: -110 * index },
  transition: { type: 'spring', bounce: 0 },
});

const bounceTransationIn = { type: 'spring', bounce: 0.5, duration: 0.5 };
const bounceTransationOut = { type: 'spring', bounce: 0, duration: 0.5 };

const bounceRight = {
  initial: { right: -setAnimationPosition(), transition: bounceTransationOut },
  animate: { right: 0, transition: bounceTransationIn },
  exit: { right: -setAnimationPosition(), transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};
const bounceLeft = {
  initial: { left: -setAnimationPosition(), transition: bounceTransationOut },
  animate: { left: 0, transition: bounceTransationIn },
  exit: { left: -setAnimationPosition(), transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};
const bounceBottom = (index: number): Record<string, unknown> => ({
  initial: { bottom: -110 * index, transition: bounceTransationOut },
  animate: { bottom: 0, transition: bounceTransationIn },
  exit: { bottom: -110 * index, transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
});
const bounceTop = (index: number): Record<string, unknown> => ({
  initial: { top: -110 * index, transition: bounceTransationOut },
  animate: { top: 0, transition: bounceTransationIn },
  exit: { top: -110 * index, transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
});

const flip = {
  initial: {
    rotateX: -90,
    opacity: 0.2,
    skewX: -20,
    transition: { bounce: 0, type: 'spring', duration: 0.6 },
  },
  animate: {
    rotateX: 0,
    opacity: 1,
    skewX: 0,
    transition: { bounce: 0.6, type: 'spring', duration: 1.5 },
  },
  exit: {
    rotateX: -90,
    opacity: 0.2,
    skewX: -20,
    transition: { bounce: 0, type: 'spring', duration: 0.6 },
  },
};

const zoom = {
  initial: { scale: 0.3, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.3, opacity: 0 },
  transition: { type: 'spring', bounce: 0 },
};

export const animations = (index: number): Record<string, any> => ({
  bounce: {
    'top-right': bounceRight,
    'top-center': bounceTop(index),
    'top-left': bounceLeft,
    'bottom-right': bounceRight,
    'bottom-center': bounceBottom(index),
    'bottom-left': bounceLeft,
  },
  slide: {
    'top-right': slideRight,
    'top-center': slideTop(index),
    'top-left': slideLeft,
    'bottom-right': slideRight,
    'bottom-center': slideBottom(index),
    'bottom-left': slideLeft,
  },
  fade: {
    'top-right': fade,
    'top-center': fade,
    'top-left': fade,
    'bottom-right': fade,
    'bottom-center': fade,
    'bottom-left': fade,
  },
  flip: {
    'top-right': flip,
    'top-center': flip,
    'top-left': flip,
    'bottom-right': flip,
    'bottom-center': flip,
    'bottom-left': flip,
  },
  zoom: {
    'top-right': zoom,
    'top-center': zoom,
    'top-left': zoom,
    'bottom-right': zoom,
    'bottom-center': zoom,
    'bottom-left': zoom,
  },
});
