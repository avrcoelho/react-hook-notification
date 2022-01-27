import React from 'react';

import { ContainerTheme } from '../../types/ContainerTheme';
import { NotificationTheme, NotificationType } from '../../types/Notification';
import { Container } from './styles';

interface ProgressBarProps {
  id: string;
  show: boolean;
  delay: number;
  theme: NotificationTheme;
  type: NotificationType;
  isPaused: boolean;
  autoClose: boolean;
  onRemove(id: string): void;
}

export const ProgressBar = ({
  id,
  show,
  onRemove,
  delay,
  theme,
  type,
  isPaused,
  autoClose,
}: ProgressBarProps): JSX.Element => {
  const parsedTheme: ContainerTheme = `${type}-${theme}`;

  return (
    <Container
      style={{
        animationDuration: `${delay}ms`,
      }}
      theme={parsedTheme}
      show={show ? 'true' : 'false'}
      animationState={isPaused ? 'paused' : 'running'}
      onAnimationEnd={() => autoClose && onRemove(id)}
      aria-label="Progress bar"
    />
  );
};
