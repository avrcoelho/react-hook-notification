import { NotificationPositions } from './NotificationPositions';
import { NotificationThemes } from './NotificationThemes';
import { NotificationTransitions } from './NotificationTransitions';

export const NotificationDefaultProps = {
  position: NotificationPositions.TopRight,
  theme: NotificationThemes.Colored,
  transition: NotificationTransitions.Bounce,
  delay: 5000,
  showProgressBar: true,
  showButtonClose: true,
  closeOnClick: true,
  showIcon: true,
  autoClose: true,
};
