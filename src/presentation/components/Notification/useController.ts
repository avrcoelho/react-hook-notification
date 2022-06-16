import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
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
  titleMaxLines: number;
  textMaxLines: number;
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
  onLineCamp(value: number): CSSProperties;
};

const DELAY = 1000;
const TITLE_SIZE = 16;
const TEXT_SIZE = 15;

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
  textMaxLines,
  titleMaxLines,
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

  const setElementRef = (elementRef: HTMLDivElement): void => {
    elementEnterRef.current = elementRef;
    elementLeaveRef.current = elementRef;
  };

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
  const disableDrag = (): void => {
    setTimeout(() => {
      if (isMount) {
        setHasDrag(false);
      }
    }, 0);
  };

  console.log(id);

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ): void => {
    const maxLeft = info.offset.x < -280;
    const maxRight = info.offset.x > 280;
    if (maxLeft || maxRight) {
      setOnRemovedOnDragEnd(true);
      onRemove(id);
    }
    disableDrag();
  };

  const onDragStart = (): void => {
    setHasDrag(true);
  };

  const sizeToAdd = TEXT_SIZE * textMaxLines + TITLE_SIZE * titleMaxLines;
  const containerAnimations = removedOnDragEnd
    ? {}
    : getAnimation({ amount, sizeToAdd })[transition][position];

  const delayDecrement = useRef(delay / DELAY);
  const timerRef = useRef<NodeJS.Timeout>();

  const onExecuteTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      delayDecrement.current -= 1;
      if (delayDecrement.current === 0) {
        onRemove(id);
      }
    }, DELAY);
  }, [id, onRemove]);

  useEffect(() => {
    const canExecute = !showProgressBar && !isPaused && autoClose;
    if (canExecute) {
      onExecuteTimer();
    } else {
      clearInterval(timerRef.current as NodeJS.Timeout);
    }

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, [autoClose, isPaused, onExecuteTimer, showProgressBar]);

  const onLineCamp = (value: number): CSSProperties => ({
    WebkitLineClamp: value,
    lineClamp: value,
  });

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
    onLineCamp,
  };
};
