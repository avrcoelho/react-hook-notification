import React from 'react';

import { globalStyles } from '../../assets/styles/global';
import { useController } from './useController';
import { Container } from '../Container';

globalStyles();

export const Notifications = (): JSX.Element => {
  const {
    notificationsTopRight,
    notificationsTopLeft,
    notificationsTopCenter,
    notificationsBottomRight,
    notificationsBottomLeft,
    notificationsBottomCenter,
    hasNotificationsTopRight,
    hasNotificationsTopLeft,
    hasNotificationsTopCenter,
    hasNotificationsBottomRight,
    hasNotificationsBottomLeft,
    hasNotificationsBottomCenter,
    onRemove,
  } = useController();

  return (
    <>
      <Container
        notifications={notificationsTopRight}
        position="top-right"
        isVisible={hasNotificationsTopRight}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsTopCenter}
        position="top-center"
        isVisible={hasNotificationsTopCenter}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsTopLeft}
        position="top-left"
        isVisible={hasNotificationsTopLeft}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsBottomRight}
        position="bottom-right"
        isVisible={hasNotificationsBottomRight}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsBottomCenter}
        position="bottom-center"
        isVisible={hasNotificationsBottomCenter}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsBottomLeft}
        position="bottom-left"
        isVisible={hasNotificationsBottomLeft}
        onRemove={onRemove}
      />
    </>
  );
};
