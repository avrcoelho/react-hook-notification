import { renderHook, act } from '@testing-library/react-hooks';

import { NotificationStore } from '../../presentation/store/NotificationStore';
import { useNotification } from '..';

jest.mock('../../presentation/components/Notifications', () => ({
  Notification: () => 'div',
}));

const spiedNotificationStoreAdd = jest.spyOn(
  NotificationStore.getInstance(),
  'add',
);

describe('useNotification hook', () => {
  const notificationParams = {
    text: 'text test',
  };

  beforeEach(() => {
    spiedNotificationStoreAdd.mockClear();
  });

  it('should be able to dispatch info notification', () => {
    const { result } = renderHook(useNotification);

    act(() => {
      result.current.info(notificationParams);
    });

    expect(spiedNotificationStoreAdd).toBeCalled();
  });

  it('should be able to dispatch success notification', () => {
    const { result } = renderHook(useNotification);

    act(() => {
      result.current.success(notificationParams);
    });

    expect(spiedNotificationStoreAdd).toBeCalled();
  });

  it('should be able to dispatch error notification', () => {
    const { result } = renderHook(useNotification);

    act(() => {
      result.current.error(notificationParams);
    });

    expect(spiedNotificationStoreAdd).toBeCalled();
  });

  it('should be able to dispatch warning notification', () => {
    const { result } = renderHook(useNotification);

    act(() => {
      result.current.warning(notificationParams);
    });

    expect(spiedNotificationStoreAdd).toBeCalled();
  });

  it('should be able to dispatch default notification', () => {
    const { result } = renderHook(useNotification);

    act(() => {
      result.current.default(notificationParams);
    });

    expect(spiedNotificationStoreAdd).toBeCalled();
  });
});
