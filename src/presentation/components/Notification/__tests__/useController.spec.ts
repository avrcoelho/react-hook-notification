import { renderHook, act } from '@testing-library/react-hooks';

import {
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
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
      result.current.onDragEnd({} as any, onDragEndInfoParam);
    });

    expect(mockOnRemove).toBeCalled();
  });
});
