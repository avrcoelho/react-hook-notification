export type NotificationType =
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'default';

export type NotificationPosition =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

export type NotificationTheme = 'colored' | 'dark' | 'light';

export type NotificationTransition =
  | 'bounce'
  | 'flip'
  | 'fade'
  | 'zoom'
  | 'slide';

export type NotificationDelay = number;

export type NotificationShowProgressBar = boolean;

export type NotificationShowButtonClose = boolean;

export type NotificationCloseOnClick = boolean;

export type NotificationShowIcon = boolean;

export type NotificationAutoClose = boolean;

export type NotificationPauseOnHover = boolean;

export type NotificationDraggable = boolean;

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
  type: NotificationType;
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
   * Show or hide progress bar (Default: true)
   */
  showProgressBar?: NotificationShowProgressBar;
  /**
   * Show button close  (Default: true)
   */
  showButtonClose?: NotificationShowButtonClose;
  /**
   * Close on click (Default: true)
   */
  closeOnClick?: NotificationCloseOnClick;
  /**
   * Show or hide icon (Default: true)
   */
  showIcon?: NotificationShowIcon;
  /**
   * Close notification after delay ends (Default: true)
   */
  autoClose?: NotificationAutoClose;
  /**
   * Pause auto close on hover (Default: true)
   */
  pauseOnHover?: NotificationPauseOnHover;
  /**
   * Enable or disable drag (Default: true)
   */
  draggable?: NotificationDraggable;
  /**
   * Maximum number of lines for notification title. (Default: 1)
   */
  titleMaxLines?: number;
  /**
   * Maximum number of lines for notification text. (Default: 2)
   */
  textMaxLines?: number;

  id: string;
  amount: number;
  onRemove(id: string): void;
}
