import { renderHook } from '@testing-library/react-hooks';

import {
  NotificationTheme,
  NotificationType,
} from '../../../types/Notification';
import { useController } from '../useController';

jest.useFakeTimers();

describe('Notification controller hook', () => {
  const mockOnRemove = jest.fn();
  const params = {
    id: 'test-id',
    onRemove: mockOnRemove,
    delay: 5000,
    autoClose: false,
    showIcon: true,
    theme: 'colored' as NotificationTheme,
    type: 'success' as NotificationType,
    showProgressBar: true,
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

  it('should be bale to close by autoClose', () => {
    params.autoClose = true;
    renderHook(() => useController(params));

    jest.advanceTimersByTime(params.delay);

    expect(mockOnRemove).toBeCalledWith(params.id);
  });
});
