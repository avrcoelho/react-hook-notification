import React, { memo } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  NotificationPosition,
  NotificationProps,
} from '../../types/Notification';
import { Notification } from '../Notification';
import { useController } from './useController';
import { Container as ContainerElement } from './styles';

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
}: ContainerProps): JSX.Element | null => {
  const { show } = useController({ isVisible });

  return show ? (
    <ContainerElement position={position}>
      <AnimatePresence>
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            {...notification}
            onRemove={onRemove}
            amount={notifications.length}
          />
        ))}
      </AnimatePresence>
    </ContainerElement>
  ) : null;
};

export const Container = memo(Component);
