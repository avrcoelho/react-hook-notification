import {
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
} from '@/presentation/types/NotificationTypes';

export const NotificationDefaultProps = {
  position: 'top-right' as NotificationPosition,
  theme: 'colored' as NotificationTheme,
  transition: 'bounce' as NotificationTransition,
  delay: 5000,
  hasProgressBar: true,
  hasButtonClose: true,
  hasCloseOnClick: true,
};
