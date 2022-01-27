import { renderHook } from '@testing-library/react-hooks';

import {
  NotificationTheme,
  NotificationType,
} from '../../../types/Notification';
import { useController } from '../useController';

let mockedIsActive = 0;
jest.mock('../../../hooks/useEventListener', () => ({
  useEventListener: (_, fn = jest.fn()) => {
    if (mockedIsActive < 2) {
      mockedIsActive += 1;
      fn();
    }

    return {
      current: '',
    };
  },
}));

describe('Notification controller hook', () => {
  const params = {
    autoClose: false,
    showIcon: true,
    theme: 'colored' as NotificationTheme,
    type: 'success' as NotificationType,
    showProgressBar: true,
    pauseOnHover: true,
  };
  it('should be able to with icon', () => {
    const { result } = renderHook(() => useController(params));

    expect(result.current.withIcon).toBeTruthy();
  });

  it('should not be able to with icon when type is Default', () => {
    params.type = 'default';
    const { result } = renderHook(() => useController(params));

    expect(result.current.withIcon).toBeFalsy();
  });

  it('should be able to button color light', () => {
    const { result } = renderHook(() => useController(params));

    expect(result.current.buttonColor).toBe('light');
  });

  it('should be able to button color by theme', () => {
    params.type = 'error';
    const { result } = renderHook(() => useController(params));

    expect(result.current.buttonColor).toBe(params.theme);
  });

  it('should be able to toggle paused animation', () => {
    params.type = 'error';
    const { result } = renderHook(() => useController(params));

    result.current.setElementRef({} as any);

    expect(result.current.buttonColor).toBe(params.theme);
  });
});
