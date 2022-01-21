import { render } from '@testing-library/react';

import { Notifications } from '..';

jest.mock('../useController', () => ({
  useController: () => ({
    onRemove: jest.fn(),
    notificationsTopRight: [],
    notificationsTopLeft: [],
    notificationsTopCenter: [],
    notificationsBottomRight: [],
    notificationsBottomLeft: [],
    notificationsBottomCenter: [],
    hasNotificationsTopRight: false,
    hasNotificationsTopLeft: false,
    hasNotificationsTopCenter: false,
    hasNotificationsBottomRight: false,
    hasNotificationsBottomLeft: false,
    hasNotificationsBottomCenter: false,
  }),
}));

describe('Notifications component', () => {
  it('should be able to render component', () => {
    expect(() => {
      render(<Notifications />);
    }).not.toThrow();
  });
});
