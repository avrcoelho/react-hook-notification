import { useEffect, useRef, useState } from 'react';

type UseControllerHookParams = {
  isVisible: boolean;
};

type UseControllerHook = (params: UseControllerHookParams) => { show: boolean };

const DELAY = 2000;
let TIMER: NodeJS.Timer;

export const useController: UseControllerHook = ({ isVisible }) => {
  const showRef = useRef(false);
  const [show, setShow] = useState(showRef.current);

  useEffect(() => {
    if (isVisible) {
      showRef.current = true;
      setShow(true);
    } else {
      TIMER = setTimeout(() => {
        setShow(false);
      }, DELAY);
    }

    return () => clearTimeout(TIMER);
  }, [isVisible]);

  return {
    show,
  };
};
