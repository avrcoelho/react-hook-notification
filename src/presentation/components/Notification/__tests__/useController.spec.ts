import { renderHook } from '@testing-library/react-hooks';

import { NotificationThemes } from '@/presentation/constants/NotificationThemes';
import { NotificationTypes } from '@/presentation/constants/NotificationTypes';

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
    theme: NotificationThemes.Colored,
    type: NotificationTypes.Success,
    showProgressBar: true,
  };
  it('should be able to with icon', () => {
    const { result } = renderHook(() => useController(params));

    expect(result.current.withIcon).toBeTruthy();
  });

  it('should not be able to with icon when type is Default', () => {
    params.type = NotificationTypes.Default;
    const { result } = renderHook(() => useController(params));

    expect(result.current.withIcon).toBeFalsy();
  });

  it('should be able to button color light', () => {
    const { result } = renderHook(() => useController(params));

    expect(result.current.buttonColor).toBe(NotificationThemes.Light);
  });

  it('should be able to button color by theme', () => {
    params.type = NotificationTypes.Error;
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
