import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constantes/NotificationDefaultProps';
import { ContainerTheme, IconTheme } from '@/presentation/types/ContainerTheme';
import { Icon } from '../Icon';

import {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Text,
  colorsIcon,
} from './styles';

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
  const themeSelected: ContainerTheme = `${type}-${theme}`;
  const colorTheme = `${type}-${theme}` as IconTheme;

  return (
    <Container theme={themeSelected}>
      {withIcon && (
        <IconContainer>
          <Icon type={type} size={20} color={colorsIcon[colorTheme]} />
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
