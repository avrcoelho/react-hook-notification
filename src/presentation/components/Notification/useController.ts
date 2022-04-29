import { useCallback, useEffect, useRef, useState } from 'react';
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
import { getAnimation } from '../../utils/getAnimation';
import { ContainerTheme } from '../../types/ContainerTheme';
import { useToggle } from '../../hooks/useToggle';
import { useEventListener } from '../../hooks/useEventListener';
import { useIsMounted } from '../../hooks/useIsMounted';

const DELAY = 1000;
let TIMER: NodeJS.Timeout;

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
  delay: number;
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
  setElementRef(elementRef: HTMLLIElement): void;
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
  delay,
}) => {
  const [isPaused, toggleIsPaused] = useToggle(false);
  const eventListenerOptions = {
    disabled: !pauseOnHover || !autoClose,
  };
  const elementEnterRef = useEventListener<HTMLLIElement>(
    'mouseenter',
    () => {
      toggleIsPaused();
    },
    eventListenerOptions,
  );
  const elementLeaveRef = useEventListener<HTMLLIElement>(
    'mouseleave',
    () => {
      toggleIsPaused();
    },
    eventListenerOptions,
  );

  const setElementRef = useCallback(
    (elementRef: HTMLLIElement) => {
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
  const input = [-280, 0, 280];
  const output = [0, 1, 0];
  const opacity = useTransform(x, input, output);

  const [removedOnDragEnd, setOnRemovedOnDragEnd] = useState(false);
  const [hasDrag, setHasDrag] = useState(false);
  const clickIsAllowed = closeOnClick && !hasDrag;

  const isMount = useIsMounted();
  const disableDrag = useCallback((): void => {
    setTimeout(() => {
      if (isMount) {
        setHasDrag(false);
      }
    }, 0);
  }, [isMount]);

  const onDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const maxLeft = info.offset.x < -280;
      const maxRight = info.offset.x > 280;
      if (maxLeft || maxRight) {
        setOnRemovedOnDragEnd(true);
        onRemove(id);
      }
      disableDrag();
    },
    [disableDrag, id, onRemove],
  );

  const onDragStart = useCallback(() => {
    setHasDrag(true);
  }, []);

  const containerAnimations = removedOnDragEnd
    ? {}
    : getAnimation(amount)[transition][position];

  const delayDecrement = useRef(delay / DELAY);
  const timerRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    const canExecute = !showProgressBar && !isPaused && autoClose;
    if (canExecute) {
      timerRef.current = setInterval(() => {
        delayDecrement.current -= 1;
        if (delayDecrement.current === 0) {
          onRemove(id);
        }
      }, DELAY);
    } else {
      clearInterval(timerRef.current as NodeJS.Timeout);
    }

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [autoClose, delay, id, isPaused, onRemove, showProgressBar]);

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
