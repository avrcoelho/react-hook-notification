import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constantes/NotificationDefaulrProps';

export const Notification = ({
  type,
  position = NotificationDefaultProps.position,
  theme = NotificationDefaultProps.theme,
  transition = NotificationDefaultProps.transition,
  delay = NotificationDefaultProps.delay,
  hasProgressBar = NotificationDefaultProps.hasProgressBar,
  hasButtonClose = NotificationDefaultProps.hasButtonClose,
  hasCloseOnClick = NotificationDefaultProps.hasCloseOnClick,
}: NotificationProps): JSX.Element => {
  return <div />;
};
