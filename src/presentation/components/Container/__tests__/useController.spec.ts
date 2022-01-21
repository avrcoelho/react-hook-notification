import { renderHook } from '@testing-library/react-hooks';

import { useController } from '../useController';

jest.useFakeTimers();

describe('Container controller hook', () => {
  it('should be able to return show true', () => {
    const { result } = renderHook(() => useController({ isVisible: true }));

    expect(result.current.show).toBeTruthy();
  });

  it('should be able to return show false', () => {
    const { result } = renderHook(() => useController({ isVisible: false }));

    jest.advanceTimersByTime(2000);

    expect(result.current.show).toBeFalsy();
  });
});
