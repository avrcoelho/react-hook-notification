import React, { memo } from 'react';
import { FiX } from 'react-icons/fi';

import { NotificationProps } from '../../types/Notification';
import { NotificationDefaultProps } from '../../constants/NotificationDefaultProps';
import { colorsIcon, colorsIconButtonClose } from '../../constants/colorsIcon';
import { animations } from '../../constants/animations';
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
  const { buttonColor, themeSelected, withIcon, withProgressBar } =
    useController({
      id,
      onRemove,
      delay,
      autoClose,
      type,
      theme,
      showIcon,
      showProgressBar,
    });

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
