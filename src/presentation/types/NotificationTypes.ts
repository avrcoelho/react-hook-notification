export type NotificationTypes =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'default';

export type NotificationPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

export type NotificationTheme = 'light' | 'dark' | 'colored';

export type NotificationTransition = 'bounce' | 'flip' | 'slide' | 'zoom';

export type NotificationDelay = number;

export type NotificationHasProgressBar = boolean;

export type NotificationHasButtonClose = boolean;

export type NotificationHasCloseOnClick = boolean;
