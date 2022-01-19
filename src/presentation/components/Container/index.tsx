import { NotificationPositions } from '@/presentation/constants/NotificationPositions';
import { Notification } from '../Notification';
import { useController } from './useController';
import { Container as ContainerElement } from './styles';

export const Container = (): JSX.Element | null => {
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
      {hasNotificationsTopRight && (
        <ContainerElement position={NotificationPositions.TopRight}>
          {notificationsTopRight.map(notification => (
            <Notification
              key={notification.id}
              onRemove={onRemove}
              {...notification}
            />
          ))}
        </ContainerElement>
      )}
      {hasNotificationsTopLeft && (
        <ContainerElement position={NotificationPositions.TopLeft}>
          {notificationsTopLeft.map(notification => (
            <Notification
              key={notification.id}
              onRemove={onRemove}
              {...notification}
            />
          ))}
        </ContainerElement>
      )}
      {hasNotificationsTopCenter && (
        <ContainerElement position={NotificationPositions.TopCenter}>
          {notificationsTopCenter.map(notification => (
            <Notification
              key={notification.id}
              onRemove={onRemove}
              {...notification}
            />
          ))}
        </ContainerElement>
      )}
      {hasNotificationsBottomRight && (
        <ContainerElement position={NotificationPositions.BottomRight}>
          {notificationsBottomRight.map(notification => (
            <Notification
              key={notification.id}
              onRemove={onRemove}
              {...notification}
            />
          ))}
        </ContainerElement>
      )}
      {hasNotificationsBottomLeft && (
        <ContainerElement position={NotificationPositions.BottomLeft}>
          {notificationsBottomLeft.map(notification => (
            <Notification
              key={notification.id}
              onRemove={onRemove}
              {...notification}
            />
          ))}
        </ContainerElement>
      )}
      {hasNotificationsBottomCenter && (
        <ContainerElement position={NotificationPositions.BottomCenter}>
          {notificationsBottomCenter.map(notification => (
            <Notification
              key={notification.id}
              onRemove={onRemove}
              {...notification}
            />
          ))}
        </ContainerElement>
      )}
    </>
  );
};
