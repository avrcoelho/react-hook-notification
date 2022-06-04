import { hasWindow } from '../../shared/hasWindow';

export const defineAnimationSize = (): number => {
  const windowWidth = hasWindow() ? window.innerWidth : 0;
  const windowIsLarger = windowWidth > 640;
  return windowIsLarger ? 380 : windowWidth;
};
