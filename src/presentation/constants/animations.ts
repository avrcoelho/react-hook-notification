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
  animate: { right: 16 },
  exit: { right: -setAnimationPosition() },
  transition: { type: 'spring', bounce: 0 },
};
const slideLeft = {
  initial: { left: -setAnimationPosition() },
  animate: { left: 16 },
  exit: { left: -setAnimationPosition() },
  transition: { type: 'spring', bounce: 0 },
};
const slideBottom = {
  initial: { bottom: -110 },
  animate: { bottom: 16 },
  exit: { bottom: -110 },
  transition: { type: 'spring', bounce: 0 },
};
const slideTop = {
  initial: { top: -110 },
  animate: { top: 16 },
  exit: { top: -110 },
  transition: { type: 'spring', bounce: 0 },
};

const bounceTransationIn = { type: 'spring', bounce: 0.5, duration: 0.5 };
const bounceTransationOut = { type: 'spring', bounce: 0, duration: 0.5 };

const bounceRight = {
  initial: { right: -setAnimationPosition(), transition: bounceTransationOut },
  animate: { right: 16, transition: bounceTransationIn },
  exit: { right: -setAnimationPosition(), transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};
const bounceLeft = {
  initial: { left: -setAnimationPosition(), transition: bounceTransationOut },
  animate: { left: 16, transition: bounceTransationIn },
  exit: { left: -setAnimationPosition(), transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};
const bounceBottom = {
  initial: { bottom: -110, transition: bounceTransationOut },
  animate: { bottom: 16, transition: bounceTransationIn },
  exit: { bottom: -110, transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};
const bounceTop = {
  initial: { top: -110, transition: bounceTransationOut },
  animate: { top: 16, transition: bounceTransationIn },
  exit: { top: -110, transition: bounceTransationOut },
  transition: { type: 'spring', bounce: 0 },
};

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

export const animations = {
  bounce: {
    'top-right': {
      ...bounceRight,
    },
    'top-center': {
      ...bounceTop,
    },
    'top-left': {
      ...bounceLeft,
    },
    'bottom-right': {
      ...bounceRight,
    },
    'bottom-center': {
      ...bounceBottom,
    },
    'bottom-left': {
      ...bounceLeft,
    },
  },
  slide: {
    'top-right': slideRight,
    'top-center': slideTop,
    'top-left': slideLeft,
    'bottom-right': slideRight,
    'bottom-center': slideBottom,
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
};
