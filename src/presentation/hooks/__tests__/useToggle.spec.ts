import { renderHook, act } from '@testing-library/react-hooks';

import { useToggle } from '../useToggle';

describe('useToggle hook', () => {
  it('should be able to toggle value to true', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBeTruthy();
  });

  it('should be able to toggle value to false', () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBeFalsy();
  });
});
