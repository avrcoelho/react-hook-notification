import { defineAnimationSize } from '../defineAnimationSize';

describe('Define animation size', () => {
  it('should be able to screen > 640', () => {
    global.innerWidth = 777;
    global.dispatchEvent(new Event('resize'));
    const size = defineAnimationSize();

    expect(size).toBe(380);
  });

  it('should be able to screen < 640', () => {
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    const size = defineAnimationSize();

    expect(size).toBe(500);
  });
});
