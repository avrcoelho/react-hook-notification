import React from "react";

import { NotificationPositions } from "../../constants/NotificationPositions";
import { globalStyles } from "../../assets/styles/global";
import { useController } from "./useController";
import { Container } from "../Container";

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
        position={NotificationPositions.TopRight}
        isVisible={hasNotificationsTopRight}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsTopCenter}
        position={NotificationPositions.TopCenter}
        isVisible={hasNotificationsTopCenter}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsTopLeft}
        position={NotificationPositions.TopLeft}
        isVisible={hasNotificationsTopLeft}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsBottomRight}
        position={NotificationPositions.BottomRight}
        isVisible={hasNotificationsBottomRight}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsBottomCenter}
        position={NotificationPositions.BottomCenter}
        isVisible={hasNotificationsBottomCenter}
        onRemove={onRemove}
      />
      <Container
        notifications={notificationsBottomLeft}
        position={NotificationPositions.BottomLeft}
        isVisible={hasNotificationsBottomLeft}
        onRemove={onRemove}
      />
    </>
  );
};
