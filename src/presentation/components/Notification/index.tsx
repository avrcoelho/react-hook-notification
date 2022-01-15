import { FiX } from 'react-icons/fi';

import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constants/NotificationDefaultProps';
import { ContainerTheme, IconTheme } from '@/presentation/types/ContainerTheme';
import {
  colorsIcon,
  colorsIconButtonClose,
} from '@/presentation/constants/colorsIcon';
import { Icon } from '../Icon';

import {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Text,
  ButtonClose,
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
    <Container theme={themeSelected} role={type}>
      {withIcon && (
        <IconContainer>
          <Icon type={type} size={20} color={colorsIcon[colorTheme]} />
        </IconContainer>
      )}

      {showButtonClose && (
        <ButtonClose type="button" theme={theme}>
          <FiX type={type} size={15} color={colorsIconButtonClose[theme]} />
        </ButtonClose>
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
