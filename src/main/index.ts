import { useRef } from 'react';

import { Notifications } from '../presentation/components/Notifications';
import { NotificationStore } from '../presentation/store/NotificationStore';
import { Initialize } from './Initialize';
import {
  NotificationParams,
  UseNotificationHook,
} from './types/notificationHook';
import { NotificationType } from '../presentation/types/Notification';
import { hasDocument } from '../shared/hasDocument';

export {
  NotificationPosition,
  NotificationTheme,
  NotificationType,
  NotificationTransition,
} from '../presentation/types/Notification';

const notificationStore = NotificationStore.getInstance();
const initialize = Initialize.getInstance();

if (hasDocument()) {
  initialize.render(Notifications);
}

export const useNotification: UseNotificationHook = (
  hookParams = { position: 'top-right' },
) => {
  const info = (notificationParams: NotificationParams): void => {
    const id = String(Date.now());
    const notification = {
      ...hookParams,
      ...notificationParams,
      id,
      type: 'info' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const success = (notificationParams: NotificationParams): void => {
    const id = String(Date.now());
    const notification = {
      ...hookParams,
      ...notificationParams,
      id,
      type: 'success' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const error = (notificationParams: NotificationParams): void => {
    const id = String(Date.now());
    const notification = {
      ...hookParams,
      ...notificationParams,
      id,
      type: 'error' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const warning = (notificationParams: NotificationParams): void => {
    const id = String(Date.now());
    const notification = {
      ...hookParams,
      ...notificationParams,
      id,
      type: 'warning' as NotificationType,
    };
    notificationStore.add(notification);
  };

  const defaultNotification = (
    notificationParams: NotificationParams,
  ): void => {
    const id = String(Date.now());
    const notification = {
      ...hookParams,
      ...notificationParams,
      id,
      type: 'default' as NotificationType,
    };
    notificationStore.add(notification);
  };

  return useRef({
    info,
    error,
    success,
    warning,
    default: defaultNotification,
  }).current;
};
