import { AnimatePresence } from 'framer-motion';

import { NotificationPositions } from '@/presentation/constants/NotificationPositions';
import { globalStyles } from '@/presentation/assets/styles/global';
import { Notification } from '../Notification';
import { useController } from './useController';
import { Container as ContainerElement } from './styles';
import { animations } from '../../constants/animations';

globalStyles();

export const Container = (): JSX.Element => {
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
    <AnimatePresence>
      {hasNotificationsTopRight && (
        <ContainerElement
          position={NotificationPositions.TopRight}
          {...animations[notificationsTopRight[0].transition || 'fade'][
            NotificationPositions.TopRight
          ]}
        >
          <AnimatePresence>
            {notificationsTopRight.map(notification => (
              <Notification
                key={notification.id}
                {...notification}
                onRemove={onRemove}
              />
            ))}
          </AnimatePresence>
        </ContainerElement>
      )}
      {hasNotificationsTopLeft && (
        <ContainerElement
          position={NotificationPositions.TopLeft}
          {...animations[notificationsTopLeft[0].transition || 'fade'][
            NotificationPositions.TopLeft
          ]}
        >
          <AnimatePresence>
            {notificationsTopLeft.map(notification => (
              <Notification
                key={notification.id}
                {...notification}
                onRemove={onRemove}
              />
            ))}
          </AnimatePresence>
        </ContainerElement>
      )}
      {hasNotificationsTopCenter && (
        <ContainerElement
          position={NotificationPositions.TopCenter}
          {...animations[notificationsTopCenter[0].transition || 'fade'][
            NotificationPositions.TopCenter
          ]}
        >
          <AnimatePresence>
            {notificationsTopCenter.map(notification => (
              <Notification
                key={notification.id}
                {...notification}
                onRemove={onRemove}
              />
            ))}
          </AnimatePresence>
        </ContainerElement>
      )}
      {hasNotificationsBottomRight && (
        <ContainerElement
          position={NotificationPositions.BottomRight}
          {...animations[notificationsBottomRight[0].transition || 'fade'][
            NotificationPositions.BottomRight
          ]}
        >
          <AnimatePresence>
            {notificationsBottomRight.map(notification => (
              <Notification
                key={notification.id}
                {...notification}
                onRemove={onRemove}
              />
            ))}
          </AnimatePresence>
        </ContainerElement>
      )}
      {hasNotificationsBottomLeft && (
        <ContainerElement
          position={NotificationPositions.BottomLeft}
          {...animations[notificationsBottomLeft[0].transition || 'fade'][
            NotificationPositions.BottomLeft
          ]}
        >
          <AnimatePresence>
            {notificationsBottomLeft.map(notification => (
              <Notification
                key={notification.id}
                {...notification}
                onRemove={onRemove}
              />
            ))}
          </AnimatePresence>
        </ContainerElement>
      )}
      {hasNotificationsBottomCenter && (
        <ContainerElement
          position={NotificationPositions.BottomCenter}
          {...animations[notificationsBottomCenter[0].transition || 'fade'][
            NotificationPositions.BottomCenter
          ]}
        >
          <AnimatePresence>
            {notificationsBottomCenter.map(notification => (
              <Notification
                key={notification.id}
                {...notification}
                onRemove={onRemove}
              />
            ))}
          </AnimatePresence>
        </ContainerElement>
      )}
    </AnimatePresence>
  );
};
