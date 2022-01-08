// import { Container } from './styles';

import { useLayoutEffect, useState } from 'react';
import { NotificationStore } from '../../store/NotificationStore';

const notificationStore = NotificationStore.getInstance();

export const NotificationComponent2 = (): JSX.Element => {
  const [notifications, setNotifications] = useState(notificationStore.get());

  useLayoutEffect(() => {
    notificationStore.subscribe(setNotifications);
  }, []);

  console.log(notifications);

  return (
    <div>
      <button onClick={() => notificationStore.add('test')}>add</button>
      <button onClick={() => notificationStore.remove('test')}>remove</button>
    </div>
  );
};
