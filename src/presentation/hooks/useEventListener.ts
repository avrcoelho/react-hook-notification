import { useEffect, useLayoutEffect, useRef, MutableRefObject } from 'react';

type UseEventListenerOptions = {
  disabled?: boolean;
};

type EventType = keyof GlobalEventHandlersEventMap;

export type UseEventListenerHookResponse<ElementType> =
  MutableRefObject<ElementType | null>;

const DEFAULT_OPTIONS: UseEventListenerOptions = {
  disabled: false,
};

export const useEventListener = <ElementType extends Element>(
  eventType: EventType,
  handler: (e: GlobalEventHandlersEventMap[EventType]) => void,
  { disabled }: UseEventListenerOptions = DEFAULT_OPTIONS,
): UseEventListenerHookResponse<ElementType> => {
  const handlerRef = useRef(handler);
  const elementRef = useRef<ElementType>(null);

  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (disabled) {
      return () => null;
    }

    const eventHandler: EventListener = e => {
      handlerRef.current.call(elementRef.current, e);
    };

    elementRef.current?.addEventListener(eventType, eventHandler);
    return () => {
      elementRef.current?.removeEventListener(eventType, eventHandler);
    };
  }, [eventType, disabled]);

  return elementRef;
};
