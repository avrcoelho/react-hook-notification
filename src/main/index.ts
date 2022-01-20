import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Notifications } from '@/presentation/components/Notifications';
import { NotificationStore } from '@/presentation/store/NotificationStore';
import { NotificationTypes } from '@/presentation/constants/NotificationTypes';
import { Initialize } from './Initialize';
import {
  NotificationParams,
  UseNotificationHook,
} from './types/notificationHook';

const initialize = Initialize.getInstance();
initialize.render(Notifications);

const notificationStore = NotificationStore.getInstance();

export const useNotification: UseNotificationHook = hookParams => {
  const info = useCallback(
    (notificationParams: NotificationParams) => {
      const id = uuidv4();
      const notification = {
        ...hookParams,
        ...notificationParams,
        id,
        type: NotificationTypes.Info,
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
        type: NotificationTypes.Success,
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
        type: NotificationTypes.Error,
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
        type: NotificationTypes.Warning,
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
        type: NotificationTypes.Warning,
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
