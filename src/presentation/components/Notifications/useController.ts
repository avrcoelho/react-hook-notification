import { useCallback, useLayoutEffect, useState } from 'react';

import { NotificationStore } from '../../store/NotificationStore';
import { NotificationProps } from '../../types/Notification';

const notificationStore = NotificationStore.getInstance();

type NotificationData = Omit<NotificationProps, 'onRemove' | 'amount'>;

type UseControllerHook = () => {
  onRemove(id: string): void;
  notificationsTopRight: NotificationData[];
  notificationsTopLeft: NotificationData[];
  notificationsTopCenter: NotificationData[];
  notificationsBottomRight: NotificationData[];
  notificationsBottomLeft: NotificationData[];
  notificationsBottomCenter: NotificationData[];
  hasNotificationsTopRight: boolean;
  hasNotificationsTopLeft: boolean;
  hasNotificationsTopCenter: boolean;
  hasNotificationsBottomRight: boolean;
  hasNotificationsBottomLeft: boolean;
  hasNotificationsBottomCenter: boolean;
};

export const useController: UseControllerHook = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>(
    notificationStore.get(),
  );

  useLayoutEffect(() => {
    notificationStore.subscribe(setNotifications);
  }, []);

  const onRemove = useCallback((id: string): void => {
    notificationStore.remove(id);
  }, []);

  const notificationsTopRight = notifications.filter(
    notification => notification.position === 'top-right',
  );
  const notificationsTopLeft = notifications.filter(
    notification => notification.position === 'top-left',
  );
  const notificationsTopCenter = notifications.filter(
    notification => notification.position === 'top-center',
  );
  const notificationsBottomRight = notifications
    .filter(notification => notification.position === 'bottom-right')
    .reverse();
  const notificationsBottomLeft = notifications
    .filter(notification => notification.position === 'bottom-left')
    .reverse();
  const notificationsBottomCenter = notifications
    .filter(notification => notification.position === 'bottom-center')
    .reverse();

  return {
    notificationsTopRight,
    notificationsTopLeft,
    notificationsTopCenter,
    notificationsBottomRight,
    notificationsBottomLeft,
    notificationsBottomCenter,
    hasNotificationsTopRight: !!notificationsTopRight.length,
    hasNotificationsTopLeft: !!notificationsTopLeft.length,
    hasNotificationsTopCenter: !!notificationsTopCenter.length,
    hasNotificationsBottomRight: !!notificationsBottomRight.length,
    hasNotificationsBottomLeft: !!notificationsBottomLeft.length,
    hasNotificationsBottomCenter: !!notificationsBottomCenter.length,
    onRemove,
  };
};
