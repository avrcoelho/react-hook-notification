import { renderHook } from '@testing-library/react-hooks';

import { useIsMounted } from '../useIsMounted';

jest.useFakeTimers();

describe('useIsMounted hook', () => {
  it('should be able to return mounted value', async () => {
    const { result, rerender } = renderHook(useIsMounted);
    rerender();

    expect(result.current).toBeTruthy();
  });

  it('should be able to return unmounted value', async () => {
    const { result, unmount } = renderHook(useIsMounted);
    unmount();

    expect(result.current).toBeFalsy();
  });
});
