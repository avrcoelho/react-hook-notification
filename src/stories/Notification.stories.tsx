import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Notification } from '@/presentation/components/Notification';
import { NotificationDefaultProps } from '@/presentation/constantes/NotificationDefaulrProps';
import { NotificationProps } from '@/presentation/types/Notification';

export default {
  title: 'Notification example',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (
  args: NotificationProps,
) => <Notification {...args} />;

export const Notificaion = Template.bind({});
Notificaion.args = {
  type: 'default',
  ...NotificationDefaultProps,
};
