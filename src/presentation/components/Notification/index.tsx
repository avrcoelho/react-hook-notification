import { memo } from 'react';
import { FiX } from 'react-icons/fi';

import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationDefaultProps } from '@/presentation/constants/NotificationDefaultProps';
import { ContainerTheme } from '@/presentation/types/ContainerTheme';
import {
  colorsIcon,
  colorsIconButtonClose,
} from '@/presentation/constants/colorsIcon';
import { animations } from '@/presentation/constants/animations';
import { NotificationTypes } from '@/presentation/constants/NotificationTypes';
import { NotificationThemes } from '@/presentation/constants/NotificationThemes';
import { ProgressBar } from '../ProgressBar';
import { Icon } from '../Icon';
import { useController } from './useController';
import {
  Container,
  IconContainer,
  TextContainer,
  Title,
  Text,
  ButtonClose,
} from './styles';

const Component = ({
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
  autoClose = NotificationDefaultProps.autoClose,
}: NotificationProps): JSX.Element => {
  const withIcon = type === NotificationTypes.Default ? false : showIcon;
  const themeSelected: ContainerTheme = `${type}-${theme}`;
  const buttonColor =
    theme === NotificationThemes.Colored && type === NotificationTypes.Default
      ? NotificationThemes.Light
      : theme;
  const withProgressBar = showProgressBar && autoClose;

  useController({ id, onRemove, delay, autoClose });

  return (
    <Container
      theme={themeSelected}
      key={id}
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
          color={buttonColor}
          onClick={() => onRemove(id)}
          aria-label="Close notification"
        >
          <FiX
            type={type}
            size={15}
            color={colorsIconButtonClose[buttonColor]}
          />
        </ButtonClose>
      )}

      <TextContainer withIcon={withIcon ? 'true' : 'false'}>
        {title && <Title>{title}</Title>}
        <Text>{text}</Text>
      </TextContainer>

      {withProgressBar && (
        <ProgressBar delay={delay} theme={theme} type={type} />
      )}
    </Container>
  );
};

export const Notification = memo(Component);
