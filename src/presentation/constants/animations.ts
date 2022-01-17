const fade = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { type: 'spring', bounce: 0, duration: 1 },
};
const slideRight = {
  initial: { right: -380 },
  animate: { right: 16 },
  exit: { right: -380 },
  transition: { type: 'spring', bounce: 0 },
};
const slideLeft = {
  initial: { left: -380 },
  animate: { left: 16 },
  exit: { left: -380 },
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
const bounceTransation = { type: 'spring', bounce: 0.6, duration: 0.5 };

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
      ...slideRight,
      transition: bounceTransation,
    },
    'top-center': {
      ...slideTop,
      transition: bounceTransation,
    },
    'top-left': {
      ...slideLeft,
      transition: bounceTransation,
    },
    'bottom-right': {
      ...slideRight,
      transition: bounceTransation,
    },
    'bottom-center': {
      ...slideBottom,
      transition: bounceTransation,
    },
    'bottom-left': {
      ...slideLeft,
      transition: bounceTransation,
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
