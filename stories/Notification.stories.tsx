/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from '../src/presentation/components/Notification';
import { NotificationDefaultProps } from '../src/presentation/constants/NotificationDefaultProps';
import { NotificationProps } from '../src/presentation/types/Notification';
import { NotificationTypes } from '../src/presentation/constants/NotificationTypes';
import { useNotification } from '../src';

export default {
  title: 'Notification example',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (
  args: NotificationProps
) => {
  const notification = useNotification();

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
