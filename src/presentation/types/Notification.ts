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

export type NotificationTransition =
  | 'bounce'
  | 'flip'
  | 'slide'
  | 'zoom'
  | 'fade';

export type NotificationDelay = number;

export type NotificationShowProgressBar = boolean;

export type NotificationShowButtonClose = boolean;

export type NotificationCloseOnClick = boolean;

export type NotificationShowIcon = boolean;

export interface NotificationProps {
  /**
   * Notification title - Optional
   */
  title?: string;
  /**
   * Notification text
   */
  text: string;
  /**
   * Notification type
   */
  type: NotificationTypes;
  /**
   * Notification position (Default: top-left)
   */
  position?: NotificationPosition;
  /**
   * Notification theme (Default: colored)
   */
  theme?: NotificationTheme;
  /**
   * Notification delay in MS (Default: 5000)
   */
  delay?: NotificationDelay;
  /**
   * Notification transition
   */
  transition?: NotificationTransition;
  /**
   * Has progress bar in the notification (Default: true)
   */
  showProgressBar?: NotificationShowProgressBar;
  /**
   * Has button close in the notification (Default: true)
   */
  showButtonClose?: NotificationShowButtonClose;
  /**
   * Has close on click in the notification (Default: true)
   */
  closeOnClick?: NotificationCloseOnClick;
  /**
   * show icon (Default: true)
   */
  showIcon?: NotificationShowIcon;
  id: string;
  onRemove(id: string): void;
}
