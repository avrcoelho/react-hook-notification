import { NotificationStore } from '../NotificationStore';

describe('NotificationStore', () => {
  it('should be able to add notification', () => {
    const notificationStore = NotificationStore.getInstance();
    notificationStore.subscribe(jest.fn());

    notificationStore.add('test');

    expect(notificationStore.get()).toEqual(['test']);
  });

  it('should be able to remove notification', () => {
    const notificationStore = NotificationStore.getInstance();
    notificationStore.subscribe(jest.fn());

    notificationStore.add('test');
    notificationStore.remove('test');

    expect(notificationStore.get()).toEqual([]);
  });
});
