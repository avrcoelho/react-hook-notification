import { useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Notifications } from '../presentation/components/Notifications';
import { NotificationStore } from '../presentation/store/NotificationStore';
import { Initialize } from './Initialize';
import {
  NotificationParams,
  UseNotificationHook,
} from './types/notificationHook';
import { NotificationType } from '../presentation/types/Notification';

const notificationStore = NotificationStore.getInstance();

export const useNotification: UseNotificationHook = (
  hookParams = { position: 'top-right' },
) => {
  useEffect(() => {
    const initialize = Initialize.getInstance();
    initialize.render(Notifications);
  }, []);

  const info = useCallback(
    (notificationParams: NotificationParams) => {
      const id = uuidv4();
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'info' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const success = useCallback(
    (notificationParams: NotificationParams) => {
      const id = uuidv4();
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'success' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const error = useCallback(
    (notificationParams: NotificationParams) => {
      const id = uuidv4();
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'error' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const warning = useCallback(
    (notificationParams: NotificationParams) => {
      const id = uuidv4();
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'warning' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  const defaultNotification = useCallback(
    (notificationParams: NotificationParams) => {
      const id = uuidv4();
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: 'default' as NotificationType,
      };
      notificationStore.add(notification);
    },
    [hookParams],
  );

  return {
    info,
    error,
    success,
    warning,
    default: defaultNotification,
  };
};
