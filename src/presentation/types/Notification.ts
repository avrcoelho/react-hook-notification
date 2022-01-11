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

export type NotificationshowProgressBar = boolean;

export type NotificationshowButtonClose = boolean;

export type NotificationcloseOnClick = boolean;

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
  showProgressBar?: NotificationshowProgressBar;
  /**
   * Has button close in the notification
   */
  showButtonClose?: NotificationshowButtonClose;
  /**
   * Has close on click in the notification
   */
  closeOnClick?: NotificationcloseOnClick;
}
