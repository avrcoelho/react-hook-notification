import { defineAnimationSize } from '../defineAnimationSize';
import * as verifyWindow from '../../../shared/hasWindow';

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

  it('should be able to return size equal 0 when not exists window', () => {
    jest.spyOn(verifyWindow, 'hasWindow').mockReturnValue(null);
    const size = defineAnimationSize();

    expect(size).toBe(0);
  });
});
