import React from 'react';
import { screen, render } from '@testing-library/react';

import { NotificationPositions } from '../../../constants/NotificationPositions';
import { NotificationTypes } from '../../../constants/NotificationTypes';
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
        type: NotificationTypes.Error,
        text: 'text test',
      },
    ],
    isVisible: true,
    onRemove: jest.fn(),
    position: NotificationPositions.TopRight,
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
