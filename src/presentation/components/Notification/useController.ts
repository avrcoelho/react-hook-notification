import { useCallback } from 'react';

import { NotificationTheme, NotificationType } from '../../types/Notification';
import { ContainerTheme } from '../../types/ContainerTheme';
import { useToggle } from '../../hooks/useToggle';
import { useEventListener } from '../../hooks/useEventListener';

type UseControllerHookParams = {
  autoClose: boolean;
  showProgressBar: boolean;
  type: NotificationType;
  theme: NotificationTheme;
  showIcon: boolean;
  pauseOnHover: boolean;
};

type UseControllerHook = (params: UseControllerHookParams) => {
  withIcon: boolean;
  withProgressBar: boolean;
  buttonColor: NotificationTheme;
  themeSelected: ContainerTheme;
  setElementRef(elementRef: HTMLDivElement): void;
  isPaused: boolean;
};

export const useController: UseControllerHook = ({
  autoClose,
  showIcon,
  theme,
  type,
  showProgressBar,
  pauseOnHover,
}) => {
  const [isPaused, toggleIsPaused] = useToggle(false);
  const eventListenerOptions = {
    disabled: !pauseOnHover || !autoClose,
  };
  const elementEnterRef = useEventListener<HTMLDivElement>(
    'mouseenter',
    () => {
      toggleIsPaused();
    },
    eventListenerOptions,
  );
  const elementLeaveRef = useEventListener<HTMLDivElement>(
    'mouseleave',
    () => {
      toggleIsPaused();
    },
    eventListenerOptions,
  );

  const setElementRef = useCallback(
    (elementRef: HTMLDivElement) => {
      elementEnterRef.current = elementRef;
      elementLeaveRef.current = elementRef;
    },
    [elementEnterRef, elementLeaveRef],
  );

  const withIcon = type === 'default' ? false : showIcon;
  const themeSelected = `${type}-${theme}` as ContainerTheme;
  const buttonColor =
    theme === 'colored' && type === 'default' ? 'light' : theme;
  const withProgressBar = showProgressBar && autoClose;

  return {
    showProgressBar,
    withIcon,
    withProgressBar,
    themeSelected,
    buttonColor,
    setElementRef,
    isPaused,
  };
};
