import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constantes/NotificationDefaultProps';
import { ContainerTheme } from '@/presentation/types/ContainerTheme';
import { Icon } from '../Icon';

import { Container, IconContainer, TextContainer, Title, Text } from './styles';

export const Notification = ({
  type,
  position = NotificationDefaultProps.position,
  theme = NotificationDefaultProps.theme,
  transition = NotificationDefaultProps.transition,
  delay = NotificationDefaultProps.delay,
  showProgressBar = NotificationDefaultProps.showProgressBar,
  showButtonClose = NotificationDefaultProps.showButtonClose,
  closeOnClick = NotificationDefaultProps.closeOnClick,
  showIcon = NotificationDefaultProps.showIcon,
}: NotificationProps): JSX.Element => {
  const withIcon = type === 'default' ? false : showIcon;

  return (
    <Container theme={`${type}-${theme}` as ContainerTheme}>
      {withIcon && (
        <IconContainer>
          <Icon type={type} size={20} color="#fff" />
        </IconContainer>
      )}

      <TextContainer withIcon={withIcon ? 'true' : 'false'}>
        <Title>Notification title is here Notification title is here</Title>
        <Text>
          Notification title is here Notification title is here Notification
          title is here Notification title is here Notification title is here
          Notification title is here
        </Text>
      </TextContainer>
    </Container>
  );
};
