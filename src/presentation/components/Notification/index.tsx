import { FiX } from 'react-icons/fi';

import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constants/NotificationDefaultProps';
import { ContainerTheme } from '@/presentation/types/ContainerTheme';
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
import { animations } from '../../constants/animations';
import { ProgressBar } from '../ProgressBar';

export const Notification = ({
  type,
  id,
  onRemove,
  title,
  text,
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

  return (
    <Container
      theme={themeSelected}
      position={position}
      role={type}
      onClick={() => closeOnClick && onRemove(id)}
      {...animations[transition][position]}
    >
      {withIcon && (
        <IconContainer aria-label={type}>
          <Icon type={type} size={20} color={colorsIcon[theme][type]} />
        </IconContainer>
      )}

      {showButtonClose && (
        <ButtonClose
          type="button"
          theme={theme}
          onClick={() => onRemove(id)}
          aria-label="Close notification"
        >
          <FiX type={type} size={15} color={colorsIconButtonClose[theme]} />
        </ButtonClose>
      )}

      <TextContainer withIcon={withIcon ? 'true' : 'false'}>
        {title && <Title>{title}</Title>}
        <Text>{text}</Text>
      </TextContainer>

      {showProgressBar && <ProgressBar delay={delay} />}
    </Container>
  );
};
