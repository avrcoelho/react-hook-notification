import { hasDocument } from '../hasDocument';

describe('hasDocument', () => {
  it('should be able to return true', () => {
    expect(hasDocument()).toBeTruthy();
  });
});
