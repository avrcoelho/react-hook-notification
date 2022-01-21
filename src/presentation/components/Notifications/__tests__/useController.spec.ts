import { renderHook } from '@testing-library/react-hooks';
import { v4 as uuidv4 } from 'uuid';

import { NotificationStore } from '@/presentation/store/NotificationStore';
import { NotificationTypes } from '@/presentation/constants/NotificationTypes';
import { NotificationPositions } from '@/presentation/constants/NotificationPositions';
import { useController } from '../useController';

const notificationStore = NotificationStore.getInstance();

const notificationBaseData = {
  type: NotificationTypes.Default,
  text: 'text test',
};

const idTopRight = uuidv4();

describe('Notifications controller hook', () => {
  beforeAll(() => {
    notificationStore.add({
      ...notificationBaseData,
      id: idTopRight,
      position: NotificationPositions.TopRight,
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: NotificationPositions.TopLeft,
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: NotificationPositions.TopCenter,
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: NotificationPositions.BottomRight,
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: NotificationPositions.BottomLeft,
    });
    notificationStore.add({
      ...notificationBaseData,
      id: uuidv4(),
      position: NotificationPositions.BottomCenter,
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
