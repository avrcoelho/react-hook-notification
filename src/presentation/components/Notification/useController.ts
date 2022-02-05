import { useCallback, useState } from 'react';
import {
  MotionValue,
  PanInfo,
  useMotionValue,
  useTransform,
} from 'framer-motion';

import {
  NotificationPosition,
  NotificationTheme,
  NotificationTransition,
  NotificationType,
} from '../../types/Notification';
import { animations } from '../../constants/animations';
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
  closeOnClick: boolean;
  id: string;
  amount: number;
  transition: NotificationTransition;
  position: NotificationPosition;
  onRemove(id: string): void;
};

type UseControllerHook = (params: UseControllerHookParams) => {
  withIcon: boolean;
  withProgressBar: boolean;
  buttonColor: NotificationTheme;
  themeSelected: ContainerTheme;
  isPaused: boolean;
  opacity: MotionValue<number>;
  x: MotionValue<number>;
  removedOnDragEnd: boolean;
  containerAnimations: Record<string, unknown>;
  clickIsAllowed: boolean;
  setElementRef(elementRef: HTMLDivElement): void;
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
  onDragStart(): void;
};

export const useController: UseControllerHook = ({
  autoClose,
  showIcon,
  theme,
  type,
  showProgressBar,
  pauseOnHover,
  id,
  onRemove,
  amount,
  transition,
  position,
  closeOnClick,
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

  const x = useMotionValue(0);
  const input = [-250, 0, 250];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  const [removedOnDragEnd, setOnRemovedOnDragEnd] = useState(false);
  const [hasDrag, setHasDrag] = useState(false);
  const clickIsAllowed = closeOnClick && !hasDrag;

  const onDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const maxLeft = info.offset.x < -245;
      const maxRight = info.offset.x > 245;
      if (maxLeft || maxRight) {
        setOnRemovedOnDragEnd(true);
        onRemove(id);
      }
      setTimeout(() => {
        setHasDrag(false);
      }, 0);
    },
    [id, onRemove],
  );

  const onDragStart = useCallback(() => {
    setHasDrag(true);
  }, []);

  const containerAnimations = removedOnDragEnd
    ? {}
    : animations(amount)[transition][position];

  return {
    showProgressBar,
    withIcon,
    withProgressBar,
    themeSelected,
    buttonColor,
    setElementRef,
    isPaused,
    x,
    opacity,
    onDragEnd,
    removedOnDragEnd,
    containerAnimations,
    onDragStart,
    clickIsAllowed,
  };
};
