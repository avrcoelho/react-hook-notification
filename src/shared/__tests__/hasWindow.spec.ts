import { hasWindow } from '../hasWindow';

describe('hasWindow', () => {
  it('should be able to return true', () => {
    expect(hasWindow()).toBeTruthy();
  });
});
