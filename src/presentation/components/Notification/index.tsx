import React, { memo } from 'react';
import { FiX } from 'react-icons/fi';

import { NotificationProps } from '../../types/Notification';
import { NotificationDefaultProps } from '../../constants/NotificationDefaultProps';
import { colorsIcon, colorsIconButtonClose } from '../../constants/colorsIcon';
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
  amount,
  position = NotificationDefaultProps.position,
  theme = NotificationDefaultProps.theme,
  transition = NotificationDefaultProps.transition,
  delay = NotificationDefaultProps.delay,
  showProgressBar = NotificationDefaultProps.showProgressBar,
  showButtonClose = NotificationDefaultProps.showButtonClose,
  closeOnClick = NotificationDefaultProps.closeOnClick,
  showIcon = NotificationDefaultProps.showIcon,
  autoClose = NotificationDefaultProps.autoClose,
  pauseOnHover = NotificationDefaultProps.pauseOnHover,
  draggable = NotificationDefaultProps.draggable,
  titleMaxLines = NotificationDefaultProps.titleMaxLines,
  textMaxLines = NotificationDefaultProps.textMaxLines,
}: NotificationProps): JSX.Element => {
  const {
    buttonColor,
    themeSelected,
    withIcon,
    withProgressBar,
    setElementRef,
    isPaused,
    x,
    opacity,
    containerAnimations,
    clickIsAllowed,
    onDragEnd,
    onDragStart,
    onLineCamp,
  } = useController({
    autoClose,
    type,
    theme,
    showIcon,
    showProgressBar,
    pauseOnHover,
    id,
    onRemove,
    amount,
    position,
    transition,
    closeOnClick,
    delay,
    titleMaxLines,
    textMaxLines,
  });

  return (
    <Container
      ref={setElementRef}
      theme={themeSelected}
      borderColor={showProgressBar ? 'no-border' : themeSelected}
      key={id}
      role="status"
      onClick={() => clickIsAllowed && onRemove(id)}
      drag={draggable ? 'x' : false}
      dragSnapToOrigin
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      style={{ x, opacity }}
      {...containerAnimations}
    >
      {withIcon && (
        <IconContainer aria-label={`Icon ${type}`}>
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
        {title && (
          <Title style={{ ...onLineCamp(titleMaxLines) }}>{title}</Title>
        )}
        <Text style={{ ...onLineCamp(textMaxLines) }}>{text}</Text>
      </TextContainer>

      {withProgressBar && (
        <ProgressBar
          delay={delay}
          theme={theme}
          type={type}
          isPaused={isPaused}
          id={id}
          onRemove={onRemove}
          autoClose={autoClose}
        />
      )}
    </Container>
  );
};

export const Notification = memo(Component);
