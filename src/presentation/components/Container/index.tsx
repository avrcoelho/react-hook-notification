import { memo } from 'react';
import { AnimatePresence } from 'framer-motion';

import { animations } from '@/presentation/constants/animations';
import {
  NotificationPosition,
  NotificationProps,
} from '@/presentation/types/Notification';
import { Notification } from '../Notification';
import { Container as ContainerElement } from './styles';
import { NotificationTransitions } from '../../constants/NotificationTransitions';

interface ContainerProps {
  isVisible: boolean;
  notifications: Omit<NotificationProps, 'onRemove'>[];
  position: NotificationPosition;
  onRemove(id: string): void;
}

const Component = ({
  isVisible,
  notifications,
  position,
  onRemove,
}: ContainerProps): JSX.Element => {
  return (
    <AnimatePresence>
      {isVisible && (
        <ContainerElement
          position={position}
          {...animations[NotificationTransitions.Fade][position]}
        >
          <AnimatePresence>
            {notifications.map(notification => (
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

export const Container = memo(Component);
