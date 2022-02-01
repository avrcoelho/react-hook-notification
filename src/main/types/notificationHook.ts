import { NotificationProps } from '../../presentation/types/Notification';

export type UseNotificationParams = Omit<
  NotificationProps,
  'title' | 'text' | 'type' | 'id' | 'onRemove' | 'amount'
>;

export type NotificationParams = Omit<
  NotificationProps,
  'onRemove' | 'type' | 'id' | 'amount'
>;

export type UseNotificationHook = (hookParams?: UseNotificationParams) => {
  default(notificationParams: NotificationParams): void;
  success(notificationParams: NotificationParams): void;
  error(notificationParams: NotificationParams): void;
  warning(notificationParams: NotificationParams): void;
  info(notificationParams: NotificationParams): void;
};
