import { NotificationPositions } from '../constants/NotificationPositions';
import { NotificationThemes } from '../constants/NotificationThemes';
import { NotificationTransitions } from '../constants/NotificationTransitions';
import { NotificationTypes } from '../constants/NotificationTypes';

export type NotificationType = NotificationTypes;

export type NotificationPosition = NotificationPositions;

export type NotificationTheme = NotificationThemes;

export type NotificationTransition = NotificationTransitions;

export type NotificationDelay = number;

export type NotificationShowProgressBar = boolean;

export type NotificationShowButtonClose = boolean;

export type NotificationCloseOnClick = boolean;

export type NotificationShowIcon = boolean;

export type NotificationAutoClose = boolean;

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
  position?: NotificationPositions;
  /**
   * Notification theme (Default: colored)
   */
  theme?: NotificationThemes;
  /**
   * Notification delay in MS (Default: 5000)
   */
  delay?: NotificationDelay;
  /**
   * Notification transition
   */
  transition?: NotificationTransitions;
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
  /**
   * Auto close notification (Default: true)
   */
  autoClose?: NotificationAutoClose;

  id: string;
  onRemove(id: string): void;
}
