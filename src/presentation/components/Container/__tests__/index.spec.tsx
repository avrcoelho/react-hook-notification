import React from 'react';
import { screen, render } from '@testing-library/react';

import {
  NotificationPosition,
  NotificationType,
} from '../../../types/Notification';
import { Container } from '..';

let mockShow = true;
jest.mock('../useController', () => ({
  useController: () => ({
    show: mockShow,
  }),
}));

describe('Container component', () => {
  const props = {
    notifications: [
      {
        id: 'id-test',
        type: 'error' as NotificationType,
        text: 'text test',
      },
    ],
    isVisible: true,
    onRemove: jest.fn(),
    position: 'top-right' as NotificationPosition,
  };
  it('should be able to render notification', () => {
    render(<Container {...props} />);

    expect(screen.getByText(props.notifications[0].text)).toBeTruthy();
  });

  it('should not be able to render notification', () => {
    mockShow = false;
    render(<Container {...props} />);

    expect(screen.queryByText(props.notifications[0].text)).toBeFalsy();
  });
});
