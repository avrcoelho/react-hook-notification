import { renderHook, act } from '@testing-library/react-hooks';

import {
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
  NotificationType,
} from '../../../types/Notification';
import { useController } from '../useController';

jest.useFakeTimers();

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
  const mockOnRemove = jest.fn();
  const params = {
    autoClose: false,
    showIcon: true,
    theme: 'colored' as NotificationTheme,
    type: 'success' as NotificationType,
    position: 'top-left' as NotificationPosition,
    transition: 'bounce' as NotificationTransition,
    showProgressBar: true,
    pauseOnHover: true,
    id: 'id',
    onRemove: mockOnRemove,
    amount: 1,
    closeOnClick: true,
    delay: 0,
    titleMaxLines: 1,
    textMaxLines: 2,
  };

  beforeEach(() => {
    mockOnRemove.mockClear();
  });

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

  it('should be able to disable click', () => {
    const { result } = renderHook(() => useController(params));

    act(() => {
      result.current.onDragStart();
    });

    expect(result.current.clickIsAllowed).toBeFalsy();
  });

  it('should not be able to call onRemove on drag end', () => {
    const onDragEndInfoParam = {
      offset: {
        x: 0,
      },
    } as any;
    const { result } = renderHook(() => useController(params));

    result.current.onDragEnd({} as any, onDragEndInfoParam);

    expect(mockOnRemove).not.toBeCalled();
  });

  it('should be able to call onRemove on drag end', () => {
    const onDragEndInfoParam = {
      offset: {
        x: -300,
      },
    } as any;
    const { result } = renderHook(() => useController(params));

    act(() => {
      result.current.onDragEnd({} as any, onDragEndInfoParam);
    });

    expect(mockOnRemove).toBeCalled();
  });

  it('should be able to call onRemove on drag end', async () => {
    const onDragEndInfoParam = {
      offset: {
        x: 300,
      },
    } as any;
    const { result } = renderHook(() => useController(params));

    act(() => {
      result.current.onDragStart();
    });
    act(() => {
      result.current.onDragEnd({} as any, onDragEndInfoParam);
    });
    act(() => {
      jest.advanceTimersByTime(0);
    });

    expect(mockOnRemove).toBeCalled();
  });

  it('should not be able to call onRemove when progress bar is hide', () => {
    renderHook(() =>
      useController({ ...params, showProgressBar: false, autoClose: false }),
    );

    expect(mockOnRemove).not.toBeCalled();
  });

  it('should be set line clamp', () => {
    const { result } = renderHook(() => useController(params));

    const style = result.current.onLineCamp(2);

    expect(style).toEqual({ WebkitLineClamp: 2, lineClamp: 2 });
  });

  it('should not be able to call onRemove when is paused', () => {
    renderHook(() =>
      useController({
        ...params,
        showProgressBar: false,
        autoClose: true,
        delay: 5000,
      }),
    );

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    expect(mockOnRemove).toBeCalled();
  });
});
