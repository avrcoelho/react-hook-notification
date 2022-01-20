import { useEffect, useLayoutEffect, useRef } from 'react';

type UseControllerHookParams = {
  id: string;
  delay: number;
  autoClose: boolean;
  onRemove(id: string): void;
};

type UseControllerHook = (params: UseControllerHookParams) => void;

const DELAY = 1000;

export const useController: UseControllerHook = ({
  id,
  onRemove,
  delay,
  autoClose,
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
        console.log(1);

        onRemoveRef.current(id);
      }
    }, DELAY);

    return () => clearInterval(timer);
  }, [autoClose, delay, id]);
};
