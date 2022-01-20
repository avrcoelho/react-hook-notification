/* eslint-disable react/destructuring-assignment */
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from '@/presentation/components/Notification';
import { NotificationDefaultProps } from '@/presentation/constants/NotificationDefaultProps';
import { NotificationProps } from '@/presentation/types/Notification';
import { NotificationTypes } from '@/presentation/constants/NotificationTypes';
import { useNotification } from '../main';

export default {
  title: 'Notification example',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (
  args: NotificationProps,
) => {
  const notification = useNotification({});

  return (
    <button type="button" onClick={() => notification[args.type](args)}>
      dispatch
    </button>
  );
};

export const Notificaion = Template.bind({});
Notificaion.args = {
  type: NotificationTypes.Default,
  ...NotificationDefaultProps,
};
