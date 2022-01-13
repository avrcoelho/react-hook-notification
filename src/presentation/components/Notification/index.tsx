import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constantes/NotificationDefaultProps';
import { ContainerTheme } from '@/presentation/types/ContainerTheme';

import { Container, Title, Text } from './styles';

export const Notification = ({
  type,
  position = NotificationDefaultProps.position,
  theme = NotificationDefaultProps.theme,
  transition = NotificationDefaultProps.transition,
  delay = NotificationDefaultProps.delay,
  showProgressBar = NotificationDefaultProps.showProgressBar,
  showButtonClose = NotificationDefaultProps.showButtonClose,
  closeOnClick = NotificationDefaultProps.closeOnClick,
}: NotificationProps): JSX.Element => {
  return (
    <Container theme={`${type}-${theme}` as ContainerTheme}>
      <Title>Notification title is here Notification title is here</Title>
      <Text>
        Notification title is here Notification title is here Notification title
        is here Notification title is here Notification title is here
        Notification title is here
      </Text>
    </Container>
  );
};
