export type NotificationTypes =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

export type NotificationPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export type NotificationTheme = 'colored' | 'light' | 'dark';

export type NotificationTransition = 'bounce' | 'flip' | 'slide' | 'zoom';

export type NotificationDelay = number;

export type NotificationHasProgressBar = boolean;

export type NotificationHasButtonClose = boolean;

export type NotificationHasCloseOnClick = boolean;

export interface NotificationProps {
  /**
   * Notification type
   */
  type: NotificationTypes;
  /**
   * Notification position
   */
  position?: NotificationPosition;
  /**
   * Notification theme
   */
  theme?: NotificationTheme;
  /**
   * Notification delay
   */
  delay?: NotificationDelay;
  /**
   * Notification transition
   */
  transition?: NotificationTransition;
  /**
   * Has progress bar in the notification
   */
  hasProgressBar?: NotificationHasProgressBar;
  /**
   * Has button close in the notification
   */
  hasButtonClose?: NotificationHasButtonClose;
  /**
   * Has close on click in the notification
   */
  hasCloseOnClick?: NotificationHasCloseOnClick;
}
