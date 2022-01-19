import { useCallback } from 'react';

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
  const onRemove = useCallback((id: string): void => {
    notificationStore.remove(id);
  }, []);

  const notificationsTopRight = notificationStore
    .get()
    .filter(
      notification => notification.position === NotificationPositions.TopRight,
    );
  const notificationsTopLeft = notificationStore
    .get()
    .filter(
      notification => notification.position === NotificationPositions.TopLeft,
    );
  const notificationsTopCenter = notificationStore
    .get()
    .filter(
      notification => notification.position === NotificationPositions.TopCenter,
    );
  const notificationsBottomRight = notificationStore
    .get()
    .filter(
      notification =>
        notification.position === NotificationPositions.BottomRight,
    );
  const notificationsBottomLeft = notificationStore
    .get()
    .filter(
      notification =>
        notification.position === NotificationPositions.BottomLeft,
    );
  const notificationsBottomCenter = notificationStore
    .get()
    .filter(
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
