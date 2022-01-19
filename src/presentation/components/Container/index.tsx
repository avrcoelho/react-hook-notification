import { Notification } from '../Notification';

import { Container as ContainerElement } from './styles';

export const Container = (): JSX.Element => {
  const onRemove = (value: string): void => {
    console.log(value);
  };

  return (
    <ContainerElement position="top-center">
      <Notification
        type="default"
        position="top-center"
        text="123"
        onRemove={onRemove}
        id="isdo"
        theme="colored"
      />
      <Notification
        type="error"
        position="top-center"
        text="123"
        onRemove={onRemove}
        id="isd"
      />
    </ContainerElement>
  );
};
