import React, { useEffect, useState } from 'react';

import { ContainerTheme } from '../../types/ContainerTheme';
import { NotificationTheme, NotificationType } from '../../types/Notification';
import { Container } from './styles';

interface ProgressBarProps {
  delay: number;
  theme: NotificationTheme;
  type: NotificationType;
}

export const ProgressBar = ({
  delay,
  theme,
  type,
}: ProgressBarProps): JSX.Element => {
  const [isMount, setIsMoint] = useState(true);
  const parsedTheme: ContainerTheme = `${type}-${theme}`;

  useEffect(() => {
    setTimeout(() => {
      setIsMoint(false);
    }, 100);
  }, []);

  return (
    <Container
      theme={parsedTheme}
      style={{
        width: `${isMount ? 100 : 0}%`,
        transition: `width ${delay - 100}ms linear`,
      }}
      aria-label="Progress bar"
    />
  );
};
