import { DispatchWithoutAction, useReducer } from 'react';

export const useToggle = (
  initialValue: boolean,
): [boolean, DispatchWithoutAction] =>
  useReducer((prevState: boolean) => !prevState, initialValue);
