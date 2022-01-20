import { useCallback, useLayoutEffect, useState } from 'react';

import { NotificationStore } from '@/presentation/store/NotificationStore';
import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationPositions } from '@/presentation/constants/NotificationPositions';

const notificationStore = NotificationStore.getInstance();

type NotificationData = Omit<NotificationProps, 'onRemove'>;

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

    return () => notificationStore.unsubscribe();
  }, []);

  const onRemove = useCallback((id: string): void => {
    console.log(id);

    notificationStore.remove(id);
  }, []);

  const notificationsTopRight = notifications.filter(
    notification => notification.position === NotificationPositions.TopRight,
  );
  const notificationsTopLeft = notifications.filter(
    notification => notification.position === NotificationPositions.TopLeft,
  );
  const notificationsTopCenter = notifications.filter(
    notification => notification.position === NotificationPositions.TopCenter,
  );
  const notificationsBottomRight = notifications.filter(
    notification => notification.position === NotificationPositions.BottomRight,
  );
  const notificationsBottomLeft = notifications.filter(
    notification => notification.position === NotificationPositions.BottomLeft,
  );
  const notificationsBottomCenter = notifications.filter(
    notification =>
      notification.position === NotificationPositions.BottomCenter,
  );

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
