import {
  bounceBottom,
  bounceLeft,
  bounceRight,
  bounceTop,
  fade,
  flip,
  slideBottom,
  slideLeft,
  slideRight,
  slideTop,
  zoom,
} from '../constants/animations';

type GetAnimationProps = {
  amount: number;
  sizeToAdd: number;
};

export const getAnimation = ({
  amount,
  sizeToAdd,
}: GetAnimationProps): Record<string, any> => ({
  bounce: {
    'top-right': bounceRight,
    'top-center': bounceTop({ amount, sizeToAdd }),
    'top-left': bounceLeft,
    'bottom-right': bounceRight,
    'bottom-center': bounceBottom({ amount, sizeToAdd }),
    'bottom-left': bounceLeft,
  },
  slide: {
    'top-right': slideRight,
    'top-center': slideTop({ amount, sizeToAdd }),
    'top-left': slideLeft,
    'bottom-right': slideRight,
    'bottom-center': slideBottom({ amount, sizeToAdd }),
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
