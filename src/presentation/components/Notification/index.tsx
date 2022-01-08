import { useLayoutEffect, useState } from 'react';
import { NotificationStore } from '../../store/NotificationStore';

const notificationStore = NotificationStore.getInstance();

export const NotificationComponent = (): JSX.Element => {
  const [notifications, setNotifications] = useState(notificationStore.get());

  useLayoutEffect(() => {
    notificationStore.subscribe(setNotifications);
  }, [notifications]);

  return (
    <div>
      <button type="button" onClick={() => notificationStore.add('test')}>
        add
      </button>
      <button type="button" onClick={() => notificationStore.remove('test')}>
        remove
      </button>
    </div>
  );
};
