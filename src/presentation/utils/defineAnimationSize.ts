export const defineAnimationSize = (): number => {
  const windowWidth = typeof window !== 'undefined' ? window?.innerWidth : 0;
  const windowIsLarger = windowWidth > 640;
  return windowIsLarger ? 380 : windowWidth;
};
