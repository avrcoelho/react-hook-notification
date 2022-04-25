export const defineAnimationSize = (): number => {
  const windowWidth = window.innerWidth;
  const windowIsLarger = windowWidth > 640;
  return windowIsLarger ? 380 : windowWidth;
};