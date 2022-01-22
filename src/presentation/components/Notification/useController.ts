import { useEffect, useLayoutEffect, useRef } from 'react';

import { NotificationTheme, NotificationType } from '../../types/Notification';
import { NotificationTypes } from '../../constants/NotificationTypes';
import { NotificationThemes } from '../../constants/NotificationThemes';
import { ContainerTheme } from '../../types/ContainerTheme';

type UseControllerHookParams = {
  id: string;
  delay: number;
  autoClose: boolean;
  showProgressBar: boolean;
  type: NotificationType;
  theme: NotificationTheme;
  showIcon: boolean;
  onRemove(id: string): void;
};

type UseControllerHook = (params: UseControllerHookParams) => {
  withIcon: boolean;
  withProgressBar: boolean;
  buttonColor: NotificationTheme;
  themeSelected: ContainerTheme;
};

const DELAY = 1000;

export const useController: UseControllerHook = ({
  id,
  onRemove,
  delay,
  autoClose,
  showIcon,
  theme,
  type,
  showProgressBar,
}) => {
  const delayDecrement = useRef(0);
  const onRemoveRef = useRef(onRemove);

  useLayoutEffect(() => {
    onRemoveRef.current = onRemove;
    delayDecrement.current = delay / DELAY;
  });

  useEffect(() => {
    if (!autoClose) {
      return () => null;
    }
    const timer = setInterval(() => {
      delayDecrement.current -= 1;
      if (delayDecrement.current === 0) {
        onRemoveRef.current(id);
      }
    }, DELAY);

    return () => clearInterval(timer);
  }, [autoClose, delay, id]);

  const withIcon = type === NotificationTypes.Default ? false : showIcon;
  const themeSelected: ContainerTheme = `${type}-${theme}`;
  const buttonColor =
    theme === NotificationThemes.Colored && type === NotificationTypes.Default
      ? NotificationThemes.Light
      : theme;
  const withProgressBar = showProgressBar && autoClose;

  return {
    showProgressBar,
    withIcon,
    withProgressBar,
    themeSelected,
    buttonColor,
  };
};
