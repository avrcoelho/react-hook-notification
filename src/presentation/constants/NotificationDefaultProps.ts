import {
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
} from '../types/Notification';

export const NotificationDefaultProps = {
  title: '',
  position: 'top-right' as NotificationPosition,
  theme: 'colored' as NotificationTheme,
  transition: 'bounce' as NotificationTransition,
  delay: 5000,
  showProgressBar: true,
  showButtonClose: true,
  closeOnClick: true,
  showIcon: true,
  autoClose: true,
};
