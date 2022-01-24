import { renderHook } from '@testing-library/react-hooks';
import { v4 as uuidv4 } from 'uuid';

import { NotificationStore } from '../../../store/NotificationStore';
import { NotificationType } from '../../../types/Notification';
import { useController } from '../useController';

const notificationStore = NotificationStore.getInstance();

const notificationBaseData = {
  type: 'default' as NotificationType,
  text: 'text test',
};

const idTopRight = uuidv4();

describe('Notifications controller hook', () => {
  beforeAll(() => {
    notificationStore.add({
      ...notificationBaseData,
      id: idTopRight,
      position: 'top-right',
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: 'top-left',
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: 'top-center',
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: 'bottom-right',
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: 'bottom-left',
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: 'bottom-center',
    });
  });

  it('should be able to get notifications top-right', () => {
    const { result } = renderHook(useController);

    expect(result.current.notificationsTopRight).toHaveLength(1);
  });

  it('should be able to get notifications top-center', () => {
    const { result } = renderHook(useController);

    expect(result.current.notificationsTopCenter).toHaveLength(1);
  });

  it('should be able to get notifications top-left', () => {
    const { result } = renderHook(useController);

    expect(result.current.notificationsTopLeft).toHaveLength(1);
  });

  it('should be able to get notifications bottom-right', () => {
    const { result } = renderHook(useController);

    expect(result.current.notificationsBottomRight).toHaveLength(1);
  });

  it('should be able to get notifications bottom-center', () => {
    const { result } = renderHook(useController);

    expect(result.current.notificationsBottomCenter).toHaveLength(1);
  });

  it('should be able to get notifications bottom-left', () => {
    const { result } = renderHook(useController);

    expect(result.current.notificationsBottomLeft).toHaveLength(1);
  });

  it('should be able to remove notification', async () => {
    const spiedRemove = jest
      .spyOn(notificationStore, 'remove')
      .mockImplementation();
    const { result } = renderHook(useController);

    result.current.onRemove(idTopRight);

    expect(spiedRemove).toBeCalled();
  });
});
