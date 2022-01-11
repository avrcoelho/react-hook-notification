import {
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
} from '@/presentation/types/Notification';

export const NotificationDefaultProps = {
  position: 'top-right' as NotificationPosition,
  theme: 'colored' as NotificationTheme,
  transition: 'bounce' as NotificationTransition,
  delay: 5000,
  showProgressBar: true,
  showButtonClose: true,
  closeOnClick: true,
};
