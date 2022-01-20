import { v4 as uuidv4 } from 'uuid';

import { NotificationTypes } from '../../constants/NotificationTypes';
import { NotificationStore } from '../NotificationStore';

describe('NotificationStore', () => {
  const notificationData = {
    id: uuidv4(),
    type: NotificationTypes.Success,
    text: 'test',
  };
  it('should be able to add notification', () => {
    const notificationStore = NotificationStore.getInstance();
    notificationStore.subscribe(jest.fn());

    notificationStore.add(notificationData);

    expect(notificationStore.get()).toHaveLength(1);
  });

  it('should be able to remove notification', () => {
    const notificationStore = NotificationStore.getInstance();
    notificationStore.subscribe(jest.fn());

    notificationStore.add(notificationData);
    notificationStore.remove(notificationData.id);

    expect(notificationStore.get()).toHaveLength(0);
  });
});
