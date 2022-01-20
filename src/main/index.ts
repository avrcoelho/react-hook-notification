import { useCallback } from 'react';
import { uuid } from 'uuidv4';

import { Container } from '@/presentation/components/Container';
import { NotificationStore } from '@/presentation/store/NotificationStore';
import { NotificationTypes } from '@/presentation/constants/NotificationTypes';
import { Initialize } from './Initialize';
import {
  NotificationParams,
  UseNotificationHook,
} from './types/notificationHook';

const initialize = Initialize.getInstance();
initialize.render(Container);

const notificationStore = NotificationStore.getInstance();

export const useNotification: UseNotificationHook = hookParams => {
  const info = useCallback(
    (notificationParams: NotificationParams) => {
      const id = uuid();
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
      const id = uuid();
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
      const id = uuid();
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
      const id = uuid();
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
      const id = uuid();
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
